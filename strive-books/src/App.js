import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import Registration from "./components/Registration";
import horrorbooks from "./horror.json";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />
        <Welcome />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<BookList books={horrorbooks} />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
