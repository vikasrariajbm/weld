import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Cards() {
  return (
    <div>
      { <div className="card" style={{width: 18.5 + 'rem'}}>
  <div className="card-body">
     <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div> }

{ <div  className="card my-4" style={{width: 18.5 + 'rem'}}>
  <div className="card-body">
     <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div> }{ <div className="card my-4" style={{width: 18.5 + 'rem'}}>
  <div className="card-body">
     <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div> }{ <div className="card " style={{width: 18.5 + 'rem'}}>
  <div className="card-body">
     <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div> }



    </div>
  )
}
