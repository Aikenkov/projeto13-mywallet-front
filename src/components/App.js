import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginScreen />} />
                    <Route path='/cadastro' element={<RegistrationScreen />} />
                    <Route path='/home' element={<HomeScreen />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
