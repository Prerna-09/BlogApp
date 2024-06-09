import React from 'react'

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://i.pinimg.com/236x/22/06/1b/22061b8d455c9dd581e6235f08779aee.jpg",
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://i.pinimg.com/236x/1c/98/c3/1c98c363e96937b76e58f61839bb2752.jpg",
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://i.pinimg.com/236x/2a/6b/bb/2a6bbb6053df272f1d35149211ec0e1a.jpg",
        },
      ];
    
  
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>

        {posts.map((post)=>(
            <div className='post' key={post.id}>
                <img src={post.img} alt=""/>
                <h2>{post.title}</h2>
                <button>Read More</button>

            </div>
        ))}
        
      
    </div>
  )
}

export default Menu
