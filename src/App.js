import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Messages from "./components/Messages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="contentWrapper">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
