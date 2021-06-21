import React from 'react'
import { Link } from 'react-router-dom'


function Mainpage(props){
  return (
    <Link to="/"><button className="close-search" onClick={props.resetSearch} >Close</button></Link>
  )
}





export default Mainpage