import Index from "@/view/baseHtml/index/index.jsx";
import Login from "@/view/baseHtml/login/login.jsx";

const routes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/index",
        element: <Index />,
    },
    { path: "*", element: <Index /> },
];

export default routes;
