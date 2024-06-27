import {useState} from "react"

export function BackGroundv2(){

    const [color,setColor] = useState("");

    const colorArray = [
        {
            name: 'Red',
            value: '#771d1d',
          },
          {
            name: 'Green',
            value: '#2b771d',
          },
          {
            name: 'Blue',
            value: '#1d2477',
          },
          {
            name: 'Violet',
            value: '#4c1d77',
          },
          {
            name: 'Black',
            value: '#292929',
          },
          {
            name: 'Yellow',
            value: '#76771d',
          },
          {
            name : 'Default',
            value : '#FFA500'
          }
    ]
    return (
        <div style={{background : color}} className="w-screen h-screen">
            <div className="flex justify-center items-center">
                <div className="flex justify-around items-center shadow-2xl mt-10 h-10 rounded-2xl w-1/2 fixed bottom-20 text-white text-sm bg-white">
                    {colorArray.map((item)=> <Button color = {item.value} label={item.name} key={item.name} onClick = {() =>{setColor(item.value)}} />)}
                </div>
            </div>
        </div>
    )
}


function Button({color,label,onClick}){
    return (
        <div style={{background : color}} className="bg-purple-500 rounded-xl w-16 flex justify-center items-center" onClick={onClick}>
            <p>{label}</p>
        </div>
    )
}