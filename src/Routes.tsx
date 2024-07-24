import { Route, Routes } from "react-router-dom";
import IntroScreen from "./pages/IntroScreen";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const MainRoutes = () => {
   return(
       <Routes>
            <Route path="/" element={<IntroScreen />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Login" element={<Login />}></Route>
       </Routes>
   )
}

export default MainRoutes;