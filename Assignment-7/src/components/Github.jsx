import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Github({username}) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [repoCount, setRepoCount] = useState(0);
    const [image, setImage] = useState("");
   
    useEffect(()=>{
        axios.get(`https://api.github.com/users/${username}`)
        .then((response)=>{
            setImage(response.data.avatar_url);
            setName(response.data.name);
            setBio(response.data.bio);
            setRepoCount(response.data.public_repos)
        })
    })

    return (
        <div className="flex justify-center items-center w-screen h-screen">
        <div className=" w-96 shadow-2xl rounded-2xl">
            <div className="bg-blue-400 h-36 rounded-t-2xl"></div>
            <div className="flex justify-center items-center -mt-16 ">
                <img src={image} className="h-32 w-32 border-2 border-black rounded-full bg-white"/>
            </div>
            <div className="text-center mt-2">
                <h2 className="text-lg font-semibold">{name}<span className="text-gray-600 text-sm ml-2">24</span></h2>
                <p className="text-gray-600">India</p>
                <p className="text-gray-600">{bio}</p>
                
            </div>
            <div className="flex justify-around items-center mt-8 border-t">
                <div className="mt-4">
                    <h2 className="font-bold text-lg text-center">{repoCount}</h2>
                    <p className="text-gray-600 text-sm">Repo</p>
                </div>

                <div className="mt-4">
                    <h2 className="font-bold text-lg text-center">803K</h2>
                    <p className="text-gray-600 text-sm text-center">Likes</p>
                </div>

                <div className="mt-4">
                    <h2 className="font-bold text-lg text-center">1.4K</h2>
                    <p className="text-gray-600 text-sm text-center">Photos</p>
                </div>
            </div>
        
        </div>
        {/* <div>
            <div className='font-bold w-full h-full'>
                my name is khan
            </div>
        </div> */}
    </div>
        
            

    )
    }
