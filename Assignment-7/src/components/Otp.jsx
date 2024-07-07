import React, {useRef} from "react";

export default function Otp() {
    const inputs = useRef([]);

    const handleInput = (e,index)=>{
        const val = e.target.value;
        if (val.length === 1 && index < 3){
            inputs.current[index + 1].focus();
        }

    }

    const handleKeyDown = (index, e) => {
        if (
            e.key === "Backspace" &&
            e.target.value.length === 0 &&
            index > 0 &&
            inputs.current[index - 1]
        ) {
            // Move focus to the previous input field on backspace
            inputs.current[index - 1].focus();
        }
    };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex-col w-96 shadow-2xl rounded-2xl">
        <div>
          <h1 className="text-4xl text-center mt-4 font-bold">Login via OTP</h1>
        </div>

        <div className="mt-8 mx-4 h-12 flex justify-center">
            {
                Array.from({ length: 4 }).map((_, index) => (
                    <input
                    key={index}
                    ref={(el) => (inputs.current[index] = el)}
                    type="text"
                    maxLength= "1"
                    className="w-full outline-none mx-2 text-lg border-2 rounded-2xl text-center text-gray-500"
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onChange = {(e) => handleInput(e,index)}
                    />
                ))
            }
          {/* <input
            type="text"
            className="w-full outline-none mx-2 text-lg border-2 rounded-2xl text-center text-gray-500"
          />
          
          <input
            type="text"
            className="w-full outline-none mx-2 text-lg border-2 rounded-2xl text-center text-gray-500"
          />

          <input
            type="text"
            className="w-full outline-none mx-2 text-lg border-2 rounded-2xl text-center text-gray-500"
          />

          <input
            type="text"
            className="w-full outline-none mx-2 text-lg border-2 rounded-2xl text-center text-gray-500"
          /> */}
        </div>

        <div
          className="border-2 rounded-2xl mt-24 w-24 mx-auto mb-8 cursor-pointer">
          <p className="text-center p-2 font-semibold">Login</p>
        </div>
      </div>
    </div>
  );
}
