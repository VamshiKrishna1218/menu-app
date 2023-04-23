import React from 'react'

export default function Search() {
  return (
    <> 
    <nav Navbar ="navbar navbar-light bg-light"   >
    <form clasName="form-inline">
     <div className='search-btn'>
      <div className= "input">  <input  holder="input" className= "form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> </div>
         <div className='btn'> <button  className="btn btn-outline-success my-1 my-sm-0" type="submit">Search</button> </div>
    </div>
      </form>
   </nav>
</>
  )}