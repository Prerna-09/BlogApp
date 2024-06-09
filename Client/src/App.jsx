
import './style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Single from "./Pages/Single";
import Write from "./Pages/Write";
import Artists from './Pages/Artists';
import Artist from './Pages/Artist';
import About from './Pages/About';



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
        path:"/about",
        element:<About/>
      },
      {
        path:"/artists",
        element:<Artists/>
      },
      {
        path:"/artist/:id",
        element:<Artist/>
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
