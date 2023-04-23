import React from "react";
import {IPhoto} from "../Interfaces/UserInterfaces";
interface IPhotoInterface{
    photo: IPhoto
}

const Photo = ({photo}:IPhotoInterface) => {
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
        }}>
            <img src={photo.url} alt="" style={{
                width:"300px",
                margin:"10px 0",
            }}/>
        </div>
    )
}
export default Photo