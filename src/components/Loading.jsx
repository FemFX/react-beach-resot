import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

export default () => {
  return (
    <div className="loading">
      <h4>Loading...</h4>
      <img src={loadingGif} alt="loading"/>
    </div>
  )
}
