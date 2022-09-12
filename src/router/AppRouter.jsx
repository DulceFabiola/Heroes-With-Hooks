
import { Routes, Route } from "react-router-dom";
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// esta app tiene dos routers, para proteger algunas rutas

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Rutas de autenticación */}
                {/* <Route path="login" element={<LoginPage />} /> */}

                {/* Se puede manejar por modulos */}
                {/* <Route path="login" element={<PublicRoute>
                    <LoginPage />
                </PublicRoute>} /> */}

                {/* Otra manera es, por rutas,
                
                /* ---> Cualquier ruta q inicie con login */}
                <Route path="login/*" element={<PublicRoute>
                    <Route path="/*" element={<LoginPage />} />
                </PublicRoute>} />

                <Route path="/*" element={<PrivateRoute>
                    <HeroesRoutes />
                </PrivateRoute>} />

                {/* <Route path="/*" element={<HeroesRoutes />} /> */}
            </Routes>
        </>
    )
}
