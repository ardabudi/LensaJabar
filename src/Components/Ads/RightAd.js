import React from "react"

function RightAd() {
  return (
    <div
      style={{
        position: 'fixed',
        right: 10,
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

export default RightAd;