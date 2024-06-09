import "./artist.scss"
import { FaLongArrowAltRight } from "react-icons/fa";
import Artist from "./Artist"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Artists = () => {

  const [artistde, setArtistde] = useState([]);
  
    

  useEffect(()=>{
    const fetchArtistde = async()=>{
      try{
     const res = await axios.get(`http://localhost:8800/api/artist`)
     setArtistde(res.data)
      }
      catch(err){
        console.log(err)

      }
    }
    fetchArtistde();
  }, [])
  console.log(artistde)
  



  return (
    <div className="artists-container">

      {artistde.map((arti)=>(
        <div className="card-container" key={arti.id} >
        <img src={arti.artistimg} className="card-img" alt="artist"/>
        <div className="card-body">
          <h5>{arti.artistname}</h5>
          <p>{arti.desc}</p>

          <Link to={`/artist/${arti.id}`}>
         <div className="card-link">
          <FaLongArrowAltRight /></div>
          </Link>
                    
          
          
        </div>
       
       
      </div>

      ))}
     
    
    </div>
  )
}

export default Artists
