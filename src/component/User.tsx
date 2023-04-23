import React from "react";
import {IUserInterfaces} from "../Interfaces/UserInterfaces";
interface IUserInterface{
    user: IUserInterfaces
}

const User = ({user}:IUserInterface) => {
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column"
        }}>
            {/*<h1 style={{fontSize:"20px"}}><b style={{color:"red",}}>name:</b>{user.name}</h1>*/}
            {/*<p style={{color:"black"}}>{user.email}</p>*/}
            {/*<p><span style={{color:"red"}}>phone:</span>{user.phone}</p>*/}
            {/*<p><span style={{color:"red"}}>phone:</span>{user.phone}</p>*/}
        </div>
    )
}
export default User
