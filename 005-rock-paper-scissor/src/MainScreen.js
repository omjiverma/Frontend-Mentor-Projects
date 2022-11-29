import React from 'react'
import Score from './components/Score'
import Game from './components/Game'
import Rules from './components/Rules'
function MainScreen() {
  return (
    <article className="container">
      <Score />
      <Game />
      <Rules />
    </article>
  )
}

export default MainScreen

