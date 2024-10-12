import { useState } from "react";

const InputBox = ({name , type , id , value , placeholder , icon})=>{

const [passwordVisible , setPasswordVisible ] = useState(false)

    return(
        
        
        <div className="releative w-[100%] mb-4 flex">
                <input 
                name={name}
                type={type == "password" ? passwordVisible ? "text" : "password" : type}
                placeholder={placeholder}
                defaultValue={value}
                id = {id}
                className="input-box pl-10 w-full border rounded-md h-12"
                
                />
                <i className={"fi " + icon + " absoulute left-3 top-1/2 transform -translate-y-1/2"}></i>

                {

                       type == "password" ?
                       <i className="fi fi-rr-eye-crossed input -icon left-[auto] right-4 cursor-pointer " onClick={()=> setPasswordVisible(currentVal => !currentVal)}></i>

                       : ""

                }

        </div>

        
    )
}

export default InputBox;