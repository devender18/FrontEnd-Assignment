import {useState} from "react";
import React from "react";

export function BackGroundv2(){

    const [color,setColor] = useState("bg-white");

    const colorArray = [
        {
            name: 'Red',
            value: 'bg-red-500',
          },
          {
            name: 'Green',
            value: 'bg-green-500',
          },
          {
            name: 'Blue',
            value: 'bg-blue-500',
          },
          {
            name: 'Violet',
            value: 'bg-purple-500',
          },
          {
            name: 'Black',
            value: 'bg-black',
          },
          {
            name: 'Yellow',
            value: 'bg-yellow-500',
          },
          {
            name : 'Default',
            value : 'bg-orange-500'
          }
    ]
    return (
        <div className={`w-screen h-screen ${color}`}>
            <div className="flex justify-center items-center">
                <div className="flex justify-around items-center shadow-2xl mt-10 h-10 rounded-2xl w-1/2 fixed bottom-20 text-white text-sm bg-white">
                    {colorArray.map((item)=> <Button color = {item.value} label={item.name} key={item.name} onClick = {() =>{setColor(item.value)}} />)}
                </div>
            </div>
        </div>
    )
}


const Button = React.memo(function Button({color,label,onClick}){
    return (
        <div className={`rounded-xl w-16 flex justify-center items-center cursor-pointer ${color}`} onClick={onClick}>
            <p>{label}</p>
        </div>
    )
});