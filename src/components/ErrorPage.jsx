import React from 'react'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div className="error-container">
        <img src="/error-emoji.jpg" alt="error-image" />
        <div className="error-text">
            <div className="error-heading">error  404</div>
            <div className="error-sub">Oops! Page not found</div>
            

        </div>
        <Link to={"/"} className="home-button">← Go Home</Link>
      
    </div>
  )
}

export default ErrorPage
