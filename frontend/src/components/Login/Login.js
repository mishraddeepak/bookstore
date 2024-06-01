import React from 'react'
import { useForm } from "react-hook-form"



import Modal from 'react-bootstrap/Modal';


function Login({ show, handleClose }) {
  const {
   register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (

    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton onclick={handleClose}>
          <Modal.Title style={{ width: '100%', textAlign: 'center' }}> <h4>Log In</h4>
          </Modal.Title>
        </Modal.Header>
<form action="" onSubmit={handleSubmit(onSubmit)}>

        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ paddingLeft: '35px', marginBottom: '15px' }}>
            <span>Email</span> <br />
            <input
            {...register("email", { required: true })}
            
            required type="email"
              style={{
                borderRadius: '4px',
                outline: 'none',
                width: '50%',
                marginTop: '15px',
                outline: 'none',
              }}
              placeholder='Enter your email' />
               

          </div>
          <div style={{ paddingLeft: '35px', marginBottom: '25px' }}>
            <span>Password</span> <br />
            <input 
            {...register("password", { required: true })}
            
            required type="password" style={{
              borderRadius: '4px',
              width: '50%',
              marginTop: '15px',
              outline: 'none',
            }} placeholder='Enter your Password' />
            

          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#FF00BF',
            color: 'white',
            padding: '5px 20px',
            cursor: 'pointer',
            marginBottom: '10px',
            transition: 'all 0.3s'
          }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9629F'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF00BF'}
          >LogIn</button>
        </div>
        </form>
        <Modal.Footer>
          <div style={{}}>
            <div><h6>Not Rgistered? <span><a href="/signup">SignUp</a></span></h6>  </div>
          </div>

        </Modal.Footer>
      </Modal>

    </>


    // <div
    //   className="modal show" id='my_modal'
    //   style={{ display: 'block', position: 'initial', top: '50%', left: '50%', }}
    // >
    //   <Modal.Dialog >
    //     <Modal.Header closeButton onClick={handleClose}>
    //       <Modal.Title style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <h2>LogIn</h2>
    //       </Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //       <p>Modal body text goes here.</p>
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={handleClose}>Close</Button>
    //       <Button variant="primary">Save changes</Button>
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>

  )
}

export default Login
