import React from 'react'
import triangle from '../images/bg-triangle.svg'
import paper from '../images/paper.png'
import scissor from '../images/scissor.png'
import rock from '../images/rock.png'

function Game() {
  return (
    <div className='col-lg-7 mx-auto game'>
      <img src={triangle} alt=""  className='d-block mx-auto my-5'/>
      <div className='game-btns mt-5'>
        <a href="#" className='paper'><img className='img-btns' src={paper} alt="" /></a>
        <a href="#" className='scissor'><img className='img-btns' src={scissor} alt="" /></a>
        <a href="#" className='rock'><img className='img-btns' src={rock} alt="" /></a>
      </div>

      <button type="button" className="btn btn-outline-secondary px-5 text-light h4 border border-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Rules
      </button>
    </div>
  )
}

export default Game
