import { Routes, Route } from "react-router-dom";
import HomePage from "./HomeComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
export default Main;