// Start Routes
import express from "express";
import User from "../model/User.js";
import bcrypt, { hash } from "bcrypt";
import crypto  from "crypto";
import 'dotenv/config'
import jwt from "jsonwebtoken";
import { error } from "console";





const router = express.Router();


// Method for add user
router.post('/AddUser', async function (req, res) {
    console.log("request come from axios for adding user");
    try {
        const slateNumber = 10;
        const passwordHashed = await bcrypt.hash(req.body.password, slateNumber);
        const user = {
            email: req.body.email,
            password: passwordHashed
        }
        const NewUser = new User(user);
        
        // Generate A Token
        const scretKey =  process.env.SECRET_KEY;
        const token = jwt.sign({
            email: req.body.email
        }, scretKey, {expiresIn: "100m"});

        // Save Data To Database
        await NewUser.save();
        // Send Token To Client Side
        res.status(201).json({ token });
        console.log("✅ Success Adding User")
    } catch (error) {
        res.status(500).send({message: "❌ Failed Adding User"});
        console.log("❌ Failed Adding User" + error);
    }
});


// Check The password If It is Correct
async function isThisPassword(password, hashPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashPassword, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

// Check If The Login Correct
router.post("/CheckUser", async (req, res) => {
    try {
        const users = await User.find();
        console.log(req.body);
        const check = false;
        for (let user of users) {
            const isPasswordValid = await isThisPassword(req.body.password, user.password);
            if (user.email === req.body.email && isPasswordValid) {
                console.log("User exists with correct password");
                return res.status(200).json({isExit: true});
            }
        }
        console.log("❌ No user found with provided email and password");
        return res.status(200).json({isExit: false});
    } catch (error) {
        res.status(200).send({ message: "❌ Failed Getting Users" });
        console.log("❌ Failed Getting Users" + error);
    }
});


// Check The Email
router.post("/CheckEmail", async (req, res) => {
    try {
        const email = req.body;
        console.log(email);
        const user = await User.findOne(email);
        if (user) return res.status(201).json({ isExit: true });
        res.status(200).json({ isExit: false });
    } catch (error) {
        console.log("Error Here!!! --> " + error);
    }
});


// Verify The Expiration of the Token
router.post("/VerifyToken", (req, res) => {
    try {
        if (!req.body.token) {
            return res.json({ login: false, data: 'No token provided' });
        }
        const decode = jwt.verify(req.body.token, process.env.SECRET_KEY);
        res.json({
            login: true,
            data: decode
        });

    } catch (error) {
        console.log("❌ Failed Getting Verify " + error);

        res.json({
            login: false,
            data: error.name === "TokenExpiredError" ? "Token expired" : "Invalid token"
        });
    }
});


// Generate A Token
router.get("/GenerateToken", async (req, res) => {
    const scretKey =  process.env.SECRET_KEY;
    const token = jwt.sign({
    }, scretKey, {expiresIn: "100m"});
    res.status(201).json({ token });
});

export default router;
