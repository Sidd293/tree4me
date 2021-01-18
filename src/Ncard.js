import React from "react";
import Card from "./Card.js";
import "./App.css";
import "./Ncard.css";
import "./Ucard.css";
function Ncard({notif,pp}) {
 

  return <div className="ncard"><div className = "nprofile_pic"><img src = {pp} height = "30px" width = "30px"></img></div> <div className="noti_app">{notif}</div> </div>;


}

export default Ncard;
