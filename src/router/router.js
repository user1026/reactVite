import Index from "@/view/index/index.jsx"
import Login from "@/view/login/login.jsx";

const routes=[
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/index",
        element:<Index />
    },
    { path: "*", element: <Index />,},
];

export default routes;