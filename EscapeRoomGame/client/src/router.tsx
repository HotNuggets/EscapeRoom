import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "register",
                element: <Register />
                },
        ]
        
    }

]);