import React from 'react'


export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-sm-12 my-3">
      <div className="skills-Card">
        <div className="p-5">
          <h2 className='skills-img'>{props.heading}</h2>
        </div>
      </div>
      </div>
    </>
  )
}
