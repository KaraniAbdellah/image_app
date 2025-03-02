import "../style/footer.css";

export default function Footer() {
  return (
    <div className="flex justify-center items-center mt-1 p-3 bg-zinc-800 flex-col lg:flex-row">
      <p className="text-lg mb-5 lg:mb-0 text-center">
        <span>© 2025 Copyright. Made with</span>
        <a className="mx-1 text-sky-600" href="https://www.linkedin.com/in/abdellah-karani-965928294/">
          Abdellah Karani
        </a>
        using Proudly <a className="mx-1 text-sky-600" href="https://github.com/KaraniAbdellah">Open Source!</a>
      </p>
      <ul className="example-2 flex">
        <li className="icon-content">
          <a
            data-social="linkedin"
            aria-label="LinkedIn"
            href="https://linkedin.com/"
          >
            <div className="filled"></div>
            <svg
              viewBox="0 0 16 16"
              className="bi bi-linkedin"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              ></path>
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>
        <li className="icon-content">
          <a
            data-social="github"
            aria-label="GitHub"
            href="https://www.github.com/"
          >
            <div className="filled"></div>
            <svg
              viewBox="0 0 16 16"
              className="bi bi-github"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              ></path>
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>
        <li className="icon-content">
          <a
            data-social="twitter"
            aria-label="Twitter"
            href="https://twitter.com/"
          >
            <div className="filled"></div>
            <svg
              viewBox="0 0 16 16"
              className="bi bi-twitter"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M5 15c6.627 0 10.25-5.477 10.25-10.25 0-.156 0-.312-.011-.468A7.36 7.36 0 0 0 16 2.25a7.21 7.21 0 0 1-2.028.556A3.558 3.558 0 0 0 15.556.236a7.225 7.225 0 0 1-2.27.868A3.542 3.542 0 0 0 7.875 5.75 10.03 10.03 0 0 1 1.188 1.7a3.54 3.54 0 0 0 1.097 4.717A3.503 3.503 0 0 1 .688 5.875v.044a3.543 3.543 0 0 0 2.844 3.475 3.537 3.537 0 0 1-1.6.061 3.545 3.545 0 0 0 3.312 2.456A7.108 7.108 0 0 1 0 13.062a10.032 10.032 0 0 0 5 1.438"
              ></path>
            </svg>
          </a>
          <div className="tooltip">Twitter</div>
        </li>
        <li className="icon-content">
          <a
            data-social="youtube"
            aria-label="Youtube"
            href="https://youtube.com/"
          >
            <div className="filled"></div>
            <svg
              viewBox="0 0 16 16"
              className="bi bi-youtube"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
              ></path>
            </svg>
          </a>
          <div className="tooltip">Youtube</div>
        </li>
      </ul>
    </div>
  );
}
