import React from 'react'
import logo from '../images/logo.svg'
function Score() {
  return (
    <div className="col-lg-8 mx-auto my-5 d-flex justify-content-between  px-3 py-3 score-card">
        <div className="title">
         <img src={logo} alt="" srcset="" />
        </div>
        <div className="score card px-5 text-center">
            <h1>Score</h1>
            <p>12</p>
        </div>
    </div>
  )
}

export default Score
