import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/globalStyles";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NewEntry from "./NewEntry";
import NewExit from "./NewExit";
import PrivatePage from "./PrivatePage";
import RegistrationScreen from "./RegistrationScreen";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginScreen />} />
                    <Route path='/cadastro' element={<RegistrationScreen />} />
                    <Route
                        path='/home'
                        element={
                            <PrivatePage>
                                <HomeScreen />
                            </PrivatePage>
                        }
                    />
                    <Route
                        path='/new-entrie'
                        element={
                            <PrivatePage>
                                <NewEntry />
                            </PrivatePage>
                        }
                    />
                    <Route
                        path='/new-exit'
                        element={
                            <PrivatePage>
                                <NewExit />
                            </PrivatePage>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}
