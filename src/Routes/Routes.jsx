
import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
children:[
{
path:'/',
element:<Home></Home>
},
// {
// path:'/',
// element:<Footer></Footer>
// }
]
  },
]);

export default router;