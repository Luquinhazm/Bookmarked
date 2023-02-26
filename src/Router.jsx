import { Routes, Route } from "react-router-dom";
import BemVindo from "./pages/BemVindo";
import Inicio from "./pages/Inicio";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<BemVindo/>}/>
            <Route path="/Inicio" element={<Inicio/>}/>
        </Routes>
    )
}