
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

// esta app tiene dos routers, para proteger algunas rutas

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Rutas de autenticación */}
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}
