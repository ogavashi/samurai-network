function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <svg
          className="logo"
          width="512px"
          height="512px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000"
            d="M356.1 32.57l50 25c-2.2 8.68-9.2 22.47-20.1 37.29C372.7 113 354.4 133.3 335.6 152c-18.7 18.8-38.1 36.2-53.5 48.7-7.7 6.2-14.5 11.3-19.6 14.6-2.5 1.6-4.6 2.9-6 3.6-.3.1-.3.1-.5.1s-.2 0-.5-.1c-1.4-.7-3.5-2-6-3.6-5.1-3.3-11.9-8.4-19.6-14.6-15.4-12.5-34.8-29.9-53.5-48.7-18.8-18.7-37.1-39-50.4-57.13-10.9-14.83-17.9-28.62-20.1-37.3l50-25c14.6 29.73 29.3 62.14 44.2 90.03 16.2 30.5 31.6 55.7 51.9 65.9l4 2 4-2c20.3-10.2 35.7-35.4 51.9-65.9 14.9-27.89 29.6-60.31 44.2-90.03zM256 141.4c7.9 0 15.5.7 22.7 1.9-8.2 12.2-16 21.5-22.7 26.5-6.7-5-14.5-14.3-22.7-26.5 7.2-1.2 14.8-1.9 22.7-1.9zm83.1 32.5c23.3 22.7 35.9 54.6 35.9 86.5v.6c-33-12-75.9-17.6-119-17.6-43.1 0-86 5.6-119 17.6v-.6c0-31.9 12.6-63.8 35.9-86.5 16.2 15.6 32.2 29.8 45.7 40.7 8 6.5 15.1 11.9 21 15.7 2.9 2 5.5 3.5 8 4.7 2.5 1.2 4.4 2.4 8.4 2.4s5.9-1.2 8.4-2.4 5.1-2.7 8-4.7c5.9-3.8 13-9.2 21-15.7 13.5-10.9 29.5-25.1 45.7-40.7zm64.3 38.3c20.6 20 31.5 26.2 63.8 37.3-12.6 24.9-25.9 47.1-57 61.2l-17.3-52c-.1-5.7-.5-11.4-1.3-17.1zm-294.8 0l11.8 29.4c-.8 5.7-1.2 11.4-1.3 17.1l-17.3 52c-31.11-14.1-44.41-36.3-57.01-61.2 32.3-11.1 43.2-17.3 63.81-37.3zM265 261.5c45.1.9 89.3 8.7 117.2 22.2l28.4 85-43.3-19.8c-3.9-23.6-6.3-46.3-6.3-58.5v-14.6l-13 6.5c-27.9 14-55.5 21.6-83 23zm-18 0v43.8c-27.5-1.4-55.1-9-83-23l-13-6.5v14.6c0 12.2-2.4 34.9-6.3 58.5l-43.3 19.8 28.4-85c27.9-13.5 72.1-21.3 117.2-22.2zm96.6 42.8c1.3 18.6 4.8 43.5 9.6 67.6 3 15.4 6.6 30.2 10.5 42.4 3.9 12.3 7.3 21.8 13.9 28.5l2.7 2.6h3.7c14.1 0 38.9 1.2 52.7 9.6-1.8 1.4-4.8 3.2-8.7 4.9-9.4 4-23.9 7.7-41.5 10.6-35.2 5.9-82.9 8.9-130.5 8.9-47.6 0-95.3-3-130.5-8.9-17.6-2.9-32.11-6.6-41.51-10.6-3.9-1.7-6.9-3.5-8.7-4.9 13.7-8.4 38.61-9.6 52.71-9.6h3.7l2.7-2.6c6.6-6.7 10-16.2 13.9-28.5 3.9-12.2 7.5-27 10.5-42.4 4.8-24.1 8.3-49 9.6-67.6 58 25.3 117.2 25.3 175.2 0zm-202.8 66.2c-2.9 14.1-6.2 27.6-9.6 38.4-2.9 9.1-6.1 15.3-8.1 18.5-11.2-.1-27.71 0-43.01 5.1l13.5-40.4zm230.4 0l47.2 21.6 13.5 40.4c-15.3-5.1-31.8-5.2-43-5.1-2-3.2-5.2-9.4-8.1-18.5-3.4-10.8-6.7-24.3-9.6-38.4z"
          />
        </svg>
        <h1 className="title">Samurai-Dojo</h1>
      </header>
      <nav className="nav">
        <ul className="nav-wrapper">
          <li className="nav-item">
            <img src="./images/home.png" className="icons" alt="home" />
            <span className="icon-title">Profile</span>
          </li>
          <li className="nav-item">
            <img src="./images/messages.png" className="icons" alt="home" />
            <span className="icon-title">Messages</span>
          </li>
          <li className="nav-item">
            <img src="./images/news.png" className="icons" alt="home" />
            <span className="icon-title">News</span>
          </li>
          <li className="nav-item">
            <img src="./images/music.png" className="icons" alt="home" />
            <span className="icon-title">Music</span>
          </li>
          <li className="nav-item">
            <img src="./images/settings.png" className="icons" alt="home" />
            <span className="icon-title">Settings</span>
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="content-wrapper">
          <img
            src="https://www.bangkokbank.com/-/media/feature/page-content/bbl-corporate/country-870x490/japan-business-banking.png"
            alt="Profile-Background"
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-info">
          <a href="https://github.com/ogavashi" target="blank">
            <img src="./images/github.png" className="footer-icon" alt="github" />
          </a>
          <h3>Made by Oleg Gavashi</h3>
        </div>
        <h3>2022</h3>
      </footer>
    </div>
  );
}

export default App;
