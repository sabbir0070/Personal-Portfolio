import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
// import Background from './Component/Hook/Background';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      {/* <Background className="">
 
</Background> */}
   <div className='bg-lightgray-700'>
<RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
