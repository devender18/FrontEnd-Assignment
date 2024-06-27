import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import BackgroundChanger from "./components/BackgroundChanger";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={< Profile name="Devender Singh"/>}/>
          <Route path="/background" element = {<BackgroundChanger />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
