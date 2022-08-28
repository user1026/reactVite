import Index from "@/view/baseHtml/index/index.jsx"
import Login from "@/view/baseHtml/login/login.jsx";
import Error from "@/view/baseHtml/error/error.jsx";

const routes=[
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/",
        element:<Index />
    },
    {path:'/error',element:<Error/>},
    { path: "*", element: <Index />,},
];

export default routes;