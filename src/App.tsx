
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Viagens  from "./pages/viagens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/viagens" element={<Viagens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
