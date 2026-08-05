import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div class="error-container">
        <img src="/error-emoji.jpg" alt="" />
        <div class="error-text">
            <div class="error-heading">error  404</div>
            <div class="error-sub">Oops! Page not found</div>
            

        </div>
        <Link to={"/"} class="home-button">← Go Home</Link>
      
    </div>
  )
}

export default ErrorPage
