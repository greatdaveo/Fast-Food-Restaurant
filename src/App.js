import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SharedLayouts from "./components/SharedLayouts";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
