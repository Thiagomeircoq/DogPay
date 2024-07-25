import { Route, Routes, Navigate } from "react-router-dom";
import IntroScreen from "./pages/IntroScreen";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Cookies from "js-cookie";

type AuthenticatedRoute = {
    element: JSX.Element;
    requiresAuth: boolean;
}

const AuthenticatedRoute = ({ element, requiresAuth }: AuthenticatedRoute) => {
    const token = Cookies.get("token");
    if (requiresAuth && !token) {
        return <Navigate to="/Login" />;
    }
    return element;
};

const MainRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AuthenticatedRoute requiresAuth={true} element={<IntroScreen />} />
                }
            />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    );
};

export default MainRoutes;