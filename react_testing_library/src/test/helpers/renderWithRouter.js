import {MemoryRouter} from "react-router-dom";
import React from "react";
import AppRouter from "../../router/AppRouter";

export const renderWithRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}