import React from 'react'

const Button = () => {
  const handleClick = () => {
    // eslint-disable-next-line no-undef
    if(shareUrl){
      alert("shareUrl found")
    }else if(window.shareUrl){
      alert("window.shareUrl found")
    }
    // eslint-disable-next-line no-undef
    shareUrl.postMessage("Button clicked");
  }
  return (
    <button onClick={handleClick}>CLick me!</button>
  )
}

export default Button