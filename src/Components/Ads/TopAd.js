import React from "react"

function TopAd() {
  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'white',
          height: '100px',
          margin: '10px 0px',
          border: '1px dashed brown',
          width: '100%'
        }}
      >
        <div
          style={{ fontWeight: 'bold' }}
        >Iklan disini
        </div>
      </div>
    </div>
  )
}

export default TopAd;