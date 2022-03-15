import axios from "axios";
import { useRef } from "react";
import NavBar from "../components/Layout/navbar";

function Admin() {
     const textRef =useRef()
     const textEnRef =useRef()
     const typeRef =useRef()
     const typeArRef =useRef()
     const submitHandler = (e)=>{
         e.preventDefault()
         const obj  = {text : textRef.current.value , textEn : textEnRef.current.value , type:typeRef.current.value , typeAr : typeArRef.current.value}
         axios.post('#', obj)
         textRef.current.value = ' '
         textEnRef.current.value = ' '
         typeRef.current.value = ' '
         typeArRef.current.value = ' '
     }
    return (<div className="h-screen">
        <NavBar/>
            <form className="flex flex-col gap-20 mx-auto w-4/5 justify-center items-center mt-10">
                <div>
                <label>Text in arabic</label>
                <input className="h-20 w-96 mr-4 rounded-2xl" ref={textRef} type='text' id="text" />
                </div>

                <div>
                <label>Text in english</label>
                <input className="h-20 w-96 mr-4 rounded-2xl" ref={textEnRef} type='text' id="textEn" />
                </div>
                <div>
                <label>type in arabic</label>
                <input className="h-20 w-96 mr-4 rounded-2xl" ref={typeArRef}  type='text' id="typeAr" />
                </div>
                <div>
                <label>Text in english</label>
                <input className="h-20 w-96 mr-4 rounded-2xl" ref={typeRef} type='text' id="type" />
                </div>
                <input className="w-20 h-10 bg-maingreen" onClick={submitHandler} type='submit'value={'submit'} />
            </form>
    </div>);
}

export default Admin;