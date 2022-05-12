//Layouts 
import { HeaderOnly } from "~/components/Layout"
//Pages
import Home from "~/pages/Home"
import UpLoad from "~/pages/Upload"
import Following from "~/pages/Following"
import Search from "~/pages/Search"

//router khong dang nhap
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/upLoad", component: UpLoad, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
]
//can dang nhap
const privateRoutes = [

]
export { publicRoutes, privateRoutes }