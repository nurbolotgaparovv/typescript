import React, {useEffect, useState} from 'react';
import './App.css'
import axios from "axios";
import User from "./component/User"
import Photo from "./component/Photo";
import {IPhoto, IUserInterfaces} from "./Interfaces/UserInterfaces";



function App() {
  const [user,setUser] = useState<IUserInterfaces[]>([])
  const [photo,setPhoto] = useState<IPhoto[]>([])
  const fetchingUser = async () => {
    let responsive = await axios.get<IUserInterfaces[]>('https://jsonplaceholder.typicode.com/users')
    setUser(responsive.data)
  }
  const photoshop = async () => {
    let res = await axios.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos')
    setPhoto(res.data)
  }
  useEffect(() =>{
    fetchingUser()
    photoshop()
  },[])
  return (
    <div className="App">
      <div>
        {
          user.map(el => <User user={el}/>)
        }
      </div>
        <center>
            <h1 style={{
                color:"white"
            }}>С ДНЕМ РОЖДЕНИЯ ЧЫНГЫЗ!</h1>
        </center>
      <div  style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
      }}>
        {
          photo.slice(1,10).map(el => <Photo photo={el}/> )
        }
      </div>
    </div>
  );
}

export default App;
