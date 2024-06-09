import { Link } from "react-router-dom"
import logoo from "../assets/logoo.png"
import { useContext } from "react"
import { AuthContext } from "../Pages/AuthContext"

const Navbar = () => {

  const{currentUser , logout} = useContext(AuthContext)
  return (
    <div className='navbar'>
     <div className='container'>
      
      <div className='logo'>
<Link to="/">
<img src="https://i.pinimg.com/564x/30/96/54/309654869c084b2834d2635f19cfcbb3.jpg" alt="logo"/>
</Link>
      </div>
      <div className='links'>
        <Link className="link" to="/">
          <h6>HOME</h6>
        </Link>
        <Link className="link" to="/about">
          <h6>ABOUT</h6>
        </Link>
        <Link className="link" to="/artists">
          <h6>ARTISTS</h6>
        </Link>
        <Link className="link" to="/post/2">
          <h6>POSTS</h6>
        </Link>
        
      
      </div>

      <div className="new">
        <span className="write">
          <Link className="link" to="/write">Write</Link>
        </span>

        <span>{currentUser?.username}</span>
        {currentUser ? (
           <span onClick={logout}>Logout</span>
        ): 
        (
        <Link className="link" to="/login">Login</Link>
        )}
        
        </div>
    </div>
    </div>
  )
}

export default Navbar
