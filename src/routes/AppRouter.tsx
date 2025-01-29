import { Cars } from "@pages/Cars";
import { Issues } from "@pages/Issues";
import { Layout } from "@components/Layout/Layout";
import { Login } from "@pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "../styles/global.css";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="*" element={<>Page Not Found</>} />
                <Route element={<Layout />}>
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/issues" element={<Issues />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}