// import { Card } from "flowbite-react";
// import { CardItems } from "./components/CardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footers } from "./components/Footers";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

function App() {
  // const { mode,  } = useThemeMode();
  //computedMode, setMode, toggleMode, clearMode

  return (
    <BrowserRouter>
      <div className={` max-w-[1000px]  mx-auto px-3 py-2   `}>
        <Header />
        <div className="  my-4 w-[100%] mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>

        <Footers />
      </div>
    </BrowserRouter>
  );
}

export default App;
