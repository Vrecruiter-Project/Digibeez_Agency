import React from 'react';
import about from '../../assets/aboutbg/bannersection.png';

export default function Abouthero() {
  return (
    <>
      <div className="abouthero pt-5 ">
        <div className="aboutheroimage">
          <img src={about} alt="About us" style={{ width: "100%" , height: "30em"}} />
        </div>
      </div>



    </>
  )
}
