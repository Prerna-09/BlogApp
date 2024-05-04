
import './style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Single from "./Pages/Single";
import Write from "./Pages/Write";


const Layout=()=>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }
    ]
        
  
  },
  {
    path: "/register",
    element: <Register/>
  },

  {
    path: "/login",
    element: <Login/>
  },
]);

function App() {
 

  return (
    <>
    <div className='app'>
      <div className='container'>
      <RouterProvider router={router} />
      </div>
    </div>
   
    
    </>
  )
}

export default App