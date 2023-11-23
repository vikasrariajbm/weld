import React from 'react'
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
        <div className='Minsss my-1'>
        <div className='parag'>
      <p>Line Wise Element</p>
      </div>

       <div className='box1'>
      <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
 


      <div className="btunn-group" role="group" >
  <button type="button" className="btn1 ">Today</button>
  <button type="button" className="btn1 ">Week</button>
  <button type="button" className="btn1 ">Month</button>
  <button type="button" className="btn1 ">Custom</button>
</div>

</div>

    </div>
    <hr />
    </>

  )
}
