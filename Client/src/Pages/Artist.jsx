import "./artist.scss"
import { useState , useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const Artist = () => {

  const { id } = useParams();
  const[artistDetail, setArtistDetail] = useState([])

 

 


  useEffect(()=>{
    const fetchData = async ()=>{
      try{   
        const res = await axios.get(`http://localhost:8800/api/artistDetail/${id}`);
        setArtistDetail(res.data)

      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[id]);
  console.log(artistDetail);





  return (


    <div className='artist-container'>


      {artistDetail.map((item)=>(
        <div className=" artist-item-container" key={item.artistid}>


<div className="top-container">
<img src={item.img} alt="profile"/>

<p>{item.desc}</p>



</div>

<div className="bottom-container">

        
            
            <img src={item.albuming } alt="album" />
            <p>{item.album}</p>


        </div>
    

        </div>
        
      ))}

       

       
    </div>
  )
}

export default Artist
