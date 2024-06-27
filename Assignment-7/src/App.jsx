import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import BackgroundChanger from "./components/BackgroundChanger";
import { BackGroundv2 } from "./components/Background_v2";
import Paragenerator from "./components/Paragenerator";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={< Profile name="Devender Singh"/>}/>
          <Route path="/background" element = {<BackgroundChanger />} />
          <Route path="/background_v2" element = {<BackGroundv2 />} />
          <Route path="/para" element ={<Paragenerator />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
