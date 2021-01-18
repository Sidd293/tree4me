import React , {useState , useEffect} from 'react'
import db from "./Firebase"
import "./App.css";
import Ucard  from "./Ucard.js"
function Profile({pp,uname}) {

    const [data,setData] = useState([{id:1,name:"tillu"}])

    const [plant,setPlant] = useState([{name : "Tulsi" , url : "https://www.chhajedgarden.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_4010_2.jpg", imp: "The tulsi plant has many medicinal properties. The leaves are a nerve tonic and also sharpen memory",cost:"10"},
                                     {name : "Jamun" , url : "https://1.bp.blogspot.com/-ISpVs3uqb8M/TtqD2ePXXDI/AAAAAAAAAYA/B4yHMzVbaL0/s1600/IMG_0327.jpg",imp:" Jamun is richest source of anti-oxidants and it is fully loaded with flavonoids",cost:"20"}
                                    ,{name :"Guava", url : "https://i.ytimg.com/vi/23co4f1smvs/maxresdefault.jpg" , imp:"Boosts immmunity and digestive health" , cost:"50"}
                                  ,{name :"Banana", url : "https://www.healthbenefitstimes.com/9/gallery/banana/Banana-tree.jpg" , imp:"it acts as a very good source of potassium" , cost:"30"}
                                ,{name :"Orange", url : "https://www.jardiner-malin.fr/wp-content/uploads/2018/10/orange-tree.jpg" , imp:"good source of vitamin C" , cost:"30"}])
useEffect(() => {
db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot => {setData(snapshot.docs.map(doc=>doc.data()))})  
}, [])
    return (
        <div className = "content__bg">
         {data.map((datas,index) =><Ucard pp = {pp} uname = {uname}  pimage = {plant[datas.id].url}  pname = {plant[datas.id].name} nname = {datas.name}></Ucard>)}
        </div>
    )
}

export default Profile