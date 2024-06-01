import React from 'react'
import { useForm } from "react-hook-form"


export default function Signup() {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

    return (
        <>
            <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<form action="" onSubmit={handleSubmit(onSubmit)}>
                <div style={{border:'1px solid black',boxShadow:'5px 5px 5px light blue',backgroundColor:'#F5F5DC',borderRadius:'8px',padding:'20px'}}>
                    <div style={{margin:'10px'}}>
                        <span>Name:</span> <br />
                        <input required type="text" placeholder='Enter Your Name' 
                         {...register("name", { required: true })} 
                         />
                       
                    </div>
                   
                    <div style={{margin:'10px'}}>
                        <span>Email:</span> <br />
                        <input required type="email" placeholder='Enter Your Name' 
                        {...register("email", { required: true })} />
                        
                    </div>
                    <div style={{margin:'10px'}}>
                        <span>Password:</span> <br />
                        <input required type="password" placeholder='Enter Your Name' 
                        {...register("password", { required: true })} />
                        
                    </div>
                    <div style={{display:'flex',flexDirection:'column',marginTop:'15px',justifyContent:'center'}}>
                        <button style={{padding:'5px 10px',borderRadius:'4px',border:'none',backgroundColor:'#FF00BF',color:'white'}}
                        onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#FF00FF'}
                        onMouseOut={(e)=>e.currentTarget.style.backgroundColor='#FF00BF'}
                        >Sign Up</button>


<div><span><h6>Have an account? <a href="/">LogIn</a></h6> </span></div>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}
