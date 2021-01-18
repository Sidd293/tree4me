import React ,  {useState,useEffect} from "react";
import db from "./Firebase.js"
import Notifications from "./Notifications.js";
import Plant from "./Plant.js";
import Profile from "./Profile.js";
import "./styles.css";
import "./App.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EcoIcon from "@material-ui/icons/Eco";
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from "@material-ui/core/IconButton";
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import Button from '@material-ui/core/button';
import {Link} from "react-router-dom"
import {auth,provider} from './Firebase.js'
import Intro from "./Intro.js"
export default function App() {

  useEffect(() => {
    db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot => {setTimeout(function(){ setIsread(1) }, 5000);})  
    }, [])
function notif(){
  setIsread(null);
}
  
  const  [user,setUser] = useState("")
  const  [pp,setPp] = useState("https://avatars0.githubusercontent.com/u/61879840?s=60&v=4")
  const  [uplant,setUplant] = useState([])
  const  [isread,setIsread] = useState(0)
  const [id,setId] = useState("")
  const login = () =>{
    auth.signInWithPopup(provider)
    .then(result=>{ 
     // const  id = result.additionalUserInfo.profile.id;
     setId(result.additionalUserInfo.profile.id)
    setPp(result.additionalUserInfo.profile.picture)
    
    console.log(result);
      
      
      console.log(result)
     setUser(result.additionalUserInfo.profile.name)  
     //  setUrl(result.additionalUserInfo.profile.picture) 
   
   
    })
 }


  
  return (
    !user ? <><div className = "btn"><Button  onClick = {login} variant="contained" color="primary">
   SignUP
  </Button><Button  onClick = {()=>setUser("GUEST")} variant="contained" color="secondary">
    Login As Guest 
  </Button></div><Intro></Intro></>:<div className="App">
      <Router>
        
      <div className="app__Header">
      <Link to = "./sell">   <IconButton className="header__button">
          <div  className = {isread?"notif": "notnotif" }  onClick = {notif}><p className = "notif_ct">{isread?1:null}</p><NotificationsIcon
            style={{ fontSize: 60 }}
        ></NotificationsIcon></div>
        </IconButton></Link>
        <Link to = "./profile"><IconButton className="header__button">
<div className = "mprofile_pic" ><img src = {pp} width = "60" height = "60"></img></div>
          {/* <AccountCircleIcon style={{ fontSize: 60 } }></AccountCircleIcon> */}
        </IconButton></Link>
        <Link to  = './plant'>
              <IconButton className="header__button">
          <EcoIcon style={{ fontSize: 60 }}></EcoIcon>
        </IconButton>
        </Link>
      </div>
      <div className  = "main__content">
   <Switch>
            <Route path = "/plant">
            <Plant id = {id}></Plant>
            </Route>
            
            <Route path = "/profile">
            <Profile pp = {pp} uname = {user}></Profile>
            </Route>
            
            <Route path = "/sell">
            <Notifications></Notifications>
            </Route>
            

            <Route path ="/" >
                <div  className="content__scroll">
                
                </div>
            </Route>
           
            </Switch>
            </div>
         </Router>
    </div>
  );
}
