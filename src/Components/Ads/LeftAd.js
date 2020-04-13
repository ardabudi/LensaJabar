import React from "react"

function LeftAd() {
  return (
    <div
      style={{
        position: 'fixed',
        left: 10,
        top: '15%',
        height: '80%',
        width: '13%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px dashed brown'
      }}
      className='white hide-on-med-and-down'
    >
      <dv style={{ fontWeight: 'bold' }}>Iklan disini</dv>
    </div>
  )
}

export default LeftAd;