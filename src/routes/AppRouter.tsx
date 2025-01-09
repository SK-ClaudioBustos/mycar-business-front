import { Layout } from "@components/Layout/Layout";
import { Issues } from "@pages/Issues";
import { Login } from "@pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "../styles/global.css";
import { Cars } from "@pages/Cars";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="*" element={<>Page Not Found</>} />
                <Route element={<Layout />}>
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/issues" element={<Issues />}></Route>
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}