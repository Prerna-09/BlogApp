import Edit from "../assets/edit.png"
import Delete from "../assets/delete.png"
import Profile from "../assets/profile.jpg"
import Banner from "../assets/banner.jpg"
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";





const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src={Banner} alt=""/>
        <div className='user'>
          <img src={Profile} alt=""/>
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt=""/>
            </Link>
           
            <img src={Delete} alt=""/>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet numquam esse excepturi iure expedita exercitationem sed </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, explicabo? Hic nemo necessitatibus quae placeat sapiente eum animi provident asperiores. Ea modi blanditiis iste voluptates! Assumenda aperiam cupiditate quis voluptatum.

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque odit deserunt illum quisquam cum sequi nostrum, fuga est, sapiente veritatis obcaecati accusamus magni aut! Praesentium recusandae deserunt explicabo saepe.

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a doloribus maiores omnis quasi? Optio quis suscipit esse illo amet corrupti quidem accusamus beatae dolorem, totam, doloremque eveniet ea ducimus.</p>
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque odit deserunt illum quisquam cum sequi nostrum, fuga est, sapiente veritatis obcaecati accusamus magni aut! Praesentium recusandae deserunt explicabo saepe.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a doloribus maiores omnis quasi? Optio quis suscipit esse illo amet corrupti quidem accusamus beatae dolorem, totam, doloremque eveniet ea ducimus.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque odit deserunt illum quisquam cum sequi nostrum, fuga est, sapiente veritatis obcaecati accusamus magni aut! Praesentium recusandae deserunt explicabo saepe.

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a doloribus maiores omnis quasi? Optio quis suscipit esse illo amet corrupti quidem accusamus beatae dolorem, totam, doloremque eveniet ea ducimus.</p>
          </p>
        </p>

      </div>
  <Menu/>
    </div>
  )
}

export default Single
