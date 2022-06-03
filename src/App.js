import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="contentWrapper">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
