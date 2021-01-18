import React,{useState}  from "react";
import Card from "./Card.js";
import "./App.css";
import "./Ucard.css"
import EcoIcon from '@material-ui/icons/Eco';
import IconButton from "@material-ui/core/IconButton";


function Ucard({pp,uname,pimage,pname,nname}) {
const [like,setLike] = useState("grey")
function likeHandler(){
    setLike("green")
}


return <div className="Ucard__app">
    <div className = "ucard_header"> <div className = "name"><div className=  "profile_pic"><img src = {pp} height = "30" width = "30"></img></div> </div><p className = "ucard_uname">{uname}</p></div>
     <div  className = "pImage"><img src = {pimage} width = "260px" height = "250px"></img></div>
     <div style ={{"color" : like}}  className  ="like"><EcoIcon fontSize="large" onClick = {likeHandler}></EcoIcon></div> 
     <p className = "text">{nname} </p> <p className= "text">type: {pname}</p>
      
      </div>;


}

export default Ucard;