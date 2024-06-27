import { useEffect, useState } from "react";

export default function BackgroundChanger(){
    const [color,setColor] = useState("white");
    return (
        <div style={{background : color}}>
            <div className="w-screen h-screen bg-">
                <div className="flex justify-center items-center ">
                    <div className="flex justify-around items-center shadow-2xl mt-10 h-10 rounded-2xl w-1/2 fixed bottom-20 text-white text-sm">
                        <div className="bg-red-600 rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("red")}>
                            <p>Red</p>
                        </div>

                        <div className="bg-yellow-600 rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("yellow")}>
                            <p>Yellow</p>
                        </div>

                        <div className="bg-black rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("black")}>
                            <p>Black</p>
                        </div>

                        <div className="bg-purple-500 rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("purple")}>
                            <p>Purple</p>
                        </div>

                        <div className="bg-green-600 rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("green")}>
                            <p>Green</p>
                        </div>

                        <div className="bg-blue-500 rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("blue")}>
                            <p>Blue</p>
                        </div>

                        <div className="bg-orange-400 rounded-xl w-16 flex justify-center items-center" onClick={()=> setColor("white")}>
                            <p>Default</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function changeColor(color){

}