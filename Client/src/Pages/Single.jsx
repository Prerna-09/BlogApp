import Edit from "../assets/edit.png"
import Delete from "../assets/delete.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import axios from "axios";
import moment from "moment"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useState , useEffect } from "react";






const Single = () => {

  const[post, setPost] = useState([])

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const currentUser = useContext(AuthContext)
 


  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        setPost(res.data)

      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[postId]);
  console.log(postId)

 


  const handleDelete = async ()=>{
  
  await axios.delete(`http://localhost:8800/api/posts/${postId}`)
  .then((response)=>{
    console.log(response)
  })
  }


  

  return (
    <div className='single'>
      <div className='content'>

        <img src={post?.img} alt=""/>

        <div className='user'>
          {post.userImg && 
          <img src={post.userImg} alt=""/>}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username = post.username && 
          <div className='edit'>
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt=""/>
            </Link>
           
            <img onClick={handleDelete} src={Delete} alt=""/>
          </div>}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
        

      </div>
  <Menu/>
    </div>
  )
}

export default Single
