import {useNavigate} from "react-router-dom"
export function Login(){

    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex-col w-96 shadow-2xl rounded-2xl">

                <div>
                    <h1 className="text-4xl text-center mt-4 font-bold">Login via OTP</h1>
                </div>

                <div className="border-2 rounded-2xl mt-8 mx-4 h-12 flex justify-center  ">
                    <input type="text" placeholder="Enter your mobile number" className="w-full outline-none mx-2 text-lg"/>
                </div>

                <div className="border-2 rounded-2xl mt-24 w-24 mx-auto mb-8 cursor-pointer" onClick={()=>{
                    navigate("/otp");
                }}>
                    <p className="text-center p-2 font-semibold">Send OTP</p>
                </div>

            </div>
        </div>
    )
}