import { createHashRouter } from "react-router";
import App from '../view/Students';

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
])