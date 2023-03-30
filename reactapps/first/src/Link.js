import React from 'react'
import './App.css';
const Link = () => {
  return (
    <div className='imgg' >
        {/* add three images on click links*/}
        <a href='https://google.com' target="_blank" >
        <img src="https://images.unsplash.com/photo-1615220367990-1940567341f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="image1" />
        </a>

        <a href='https://drive.google.com' target="_blank" >
        <img src="https://images.unsplash.com/photo-1523553374578-aba5fa21a345?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="image1" />
        </a>

        <a href="https://flipkart.com"  target="_blank">
        <img src="https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="image3" />
        </a>
        {/* add link when image clicked */}

        

    </div>

  )
}

export default Link