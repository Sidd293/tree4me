import React, { useState , useEffect} from "react";
import "./Card.css";
import  firebase from 'firebase'
import Button from '@material-ui/core/button';
import TextField from "@material-ui/core/TextField";
import db from "./Firebase.js"
import {auth,provider} from './Firebase.js'
// import button from '@material-ui/core/button';
function Card({name,url,imp,cost,id}) {
var l = 0;
  const login = () =>{
     auth.signInWithPopup(provider)
     .then(result=>{ console.log(result)
      //   setUser(name)  
      //  setUrl(result.additionalUserInfo.profile.picture) 
    })
  }

  
   const [ids ,setIds] = useState(id)
    const [data,setData] = useState([])
   const [pl,setPl] = useState()
  const  [uplant,setUplant] = useState([]);
  const [show, setShow] = useState(0);
  const [buy, setBuy] = useState(false);
  console.log(uplant)
  
  function clicked()
{ console.log(data);
  setUplant([...uplant,pl])
  
  // set({uplant : db.firestore.FieldValue.arrayUnion('greater_virginia')})
  db.collection('data').add({name:pl,id:id,notif:"Congratulations! we have planted your"+pl+",Watch it grow every week in your profile",timestamp:firebase.firestore.FieldValue.serverTimestamp()})
  setPl("")
  alert("thank you for the purchase,your plant will be planted soon")
}


useEffect(() => {
  db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot => {setData(snapshot.docs.map(doc=>doc.data()))})  
  }, [])
  return (
    
    <div style={{backgroundImage:"url("+url+")"}} className="__card"  >
      
      <div >{name}</div>
      {/* <button onClick={login}></button> */}
      {show%2 ? (<div>
        <h1  className = "dialogue">
        {buy? (<div> <TextField
          id="outlined-textarea"
          label="NickName Your Plant"
          placeholder="Nickname"
          multiline
          variant="outlined"
          value = {pl}
          onChange = {e =>(setPl(e.target.value))}
         /><button onClick = {clicked} >buy</button></div>):<div>
         <button onClick ={()=>{setBuy(true)}}>plant this sapling</button>
         </div>}
       
          {/* <img src = {url}  width="500" height="600" ></img> */}
        <div><button  variant="outlined" color="primary" onClick ={() => setShow(false)}>close</button ></div>
        <div>{imp} {uplant.map(x=>x)}</div>
        </h1>
      
        
     </div> ) :<button variant="outlined" color="primary" onClick={() => setShow(show+1)} > adopt me for {cost}TP</button>}
    </div>
  );
}

export default Card;
