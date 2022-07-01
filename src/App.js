import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { CharactersPage } from "./pages/CharactersPage";
import { Footer } from "./components/Footer";
import { WeaponsPage } from "./pages/WeaponsPage";
import { CharacterPage } from "./pages/CharacterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/weapons" element={<WeaponsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
