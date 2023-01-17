import "./App.css";
import Page1 from "./Pages/Page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page2 from "./Pages/Page2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>}></Route>
          <Route path="/search" element={<Page2/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
