import { useState } from "react";

export default function Paragenerator(){
    
    const [num,setNum] = useState(0); 
    const [parag,setParag] = useState("");

    function Para(){
        let res = []
        const temp = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus aspernatur iusto eveniet aut fugiat quas quae molestiae cumque assumenda excepturi, voluptatum totam possimus temporibus natus repudiandae fuga id at non magni officiis sequi incidunt sed! Est nihil illum iste cumque laboriosam fugiat natus animi accusantium voluptates! Eveniet nam iure aut at distinctio mollitia minus placeat nostrum non nesciunt esse, dolore temporibus autem porro delectus quaerat beatae ex iusto amet adipisci dignissimos voluptatem. Iste dignissimos rem aspernatur facere, repudiandae unde eaque ipsam quam reiciendis architecto fugiat inventore excepturi quia sapiente temporibus cumque doloremque? Alias atque quis odit exercitationem neque quia."
        const searchSpace = temp.split(' ');
        while (res.length < num){
            let random = Math.floor(Math.random() * 100);
            res.push(searchSpace[random])
        }

        setParag(res.join(" "));
        
    }

    return (
        <div className="">
            <div>
                <h1 className="text-4xl font-bold text-center mt-8">Para Generator</h1>
            </div>

            <div className="flex justify-between items-center mx-12 mt-8 gap-4">
                <div className="border-2 rounded-lg h-12 flex justify-start w-full ">
                    <input type="text" placeholder="Enter Number Of Words..." className="outline-none ml-4 w-full" onChange={(e) => {
                        setNum(e.target.value)
                        console.log(num)
                    }}/>
                </div>

                <div className="bg-black text-white flex justify-center items-center rounded-2xl w-24 h-12" onClick = {()=>{
                    Para()
                }}>
                    <p>Generator</p>
                </div>
            </div>

            <div className="mx-12 mt-8 ">
                {parag}
            </div>

            

        </div>
    )
}

