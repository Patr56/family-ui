import React from "react";
import { useLocation } from "react-router-dom";

export function NoMatch() {
    const location = useLocation();
    return (
        <h2>Страница не найдена {location.pathname}</h2>
    );
}

export default NoMatch