import image from "./../assets/a.webp"
export default function Profile({name}) {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
        <div className=" h-96 w-96 shadow-2xl rounded-2xl">
            <div className="bg-blue-400 h-36 rounded-t-2xl"></div>
            <div className="flex justify-center items-center -mt-16 ">
                <img src={image} className="h-32 w-32 border-2 border-black rounded-full bg-white"/>
            </div>
            <div className="text-center mt-2">
                <h2 className="text-lg font-semibold">{name}<span className="text-gray-600 text-sm ml-2">24</span></h2>
                <p className="text-gray-600">India</p>
            </div>
            <div className="flex justify-around items-center mt-8 border-t">
                <div className="mt-4">
                    <h2 className="font-bold text-lg text-center">80K</h2>
                    <p className="text-gray-600 text-sm">Followers</p>
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
    </div>
  );
}
