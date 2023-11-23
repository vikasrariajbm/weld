import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Cards() {
  return (
    <div>
      { <div class="card" style={{width: 18.5 + 'rem'}}>
  <div class="card-body">
     <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> }

{ <div  class="card my-4" style={{width: 18.5 + 'rem'}}>
  <div class="card-body">
     <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> }{ <div class="card my-4" style={{width: 18.5 + 'rem'}}>
  <div class="card-body">
     <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> }{ <div class="card " style={{width: 18.5 + 'rem'}}>
  <div class="card-body">
     <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> }



    </div>
  )
}
