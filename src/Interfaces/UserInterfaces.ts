export interface IUserInterfaces{
    id:number
    name:string
    username:string
    email:string
    address:{
        [key:string]:string
    }
    phone:string
    website:string
    company:{
        [key:string]:string
    }
}
export interface IPhoto{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl:string
}