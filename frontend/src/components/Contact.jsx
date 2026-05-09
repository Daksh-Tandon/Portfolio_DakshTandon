import React from 'react'
import "./Contact.css"
import { useState } from 'react'
const Contact = () => {
  const [name,setname] = useState("")
  const [mail, setmail] = useState("")
  const [pending, setpending] = useState(false)
  const handler=async(e)=>{
    e.preventDefault();
    if(name.trim() && mail.trim()){
      setpending(true)
       const res=await fetch("http://localhost:4000/contacts",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,
          mail:mail
        })

    })
    const data=await res.json();
    console.log(data);
    setname("")
    setmail("")
    
       setTimeout(()=>{
        setpending(false)

    },2000)
   


    }
    else{
      alert("Enter valid credentials");
    }
  }
  return (
    <div className='cont'>
      <h1>Enter Your Details</h1>
       <form className='inputs' onSubmit={handler}> 
        <input type='text' placeholder="Enter your Name" value={name} onChange={(e)=>setname(e.target.value)}></input>
        <input type="email" placeholder='Enter your email' value={mail} onChange={(e)=>setmail(e.target.value)}></input>
        <button disabled={pending}  > {pending ? "Submitting..." : "Submit"}</button>

      </form>
      <p>I will contact you</p>
    </div>
  )
}

export default Contact