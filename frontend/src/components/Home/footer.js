import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Footer() {
  return (
    <>
      
      <div style={styles.first}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'80px'}}>
        <h6><a href="/" style = {{textDecoration:'none',}}>Home</a></h6> &nbsp;&nbsp;&nbsp;
        <h6><a href="/course" style = {{textDecoration:'none',}}>Course</a> </h6>&nbsp;&nbsp;&nbsp;
        <h6><a href="/contact" style = {{textDecoration:'none',}}>Contact</a></h6>&nbsp;&nbsp;&nbsp;
        <h6><a href="/about" style = {{textDecoration:'none',}}>About</a> </h6>&nbsp;&nbsp;&nbsp;
        </div>
        <div  style = {styles.container}>
          <InputGroup className="mb-3" style={styles.subscribe}>
        <Form.Control
          placeholder="abc@gmail.com"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary bg-danger text-white" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>
      </div>
      </div>
    </>
  )
}

export default Footer


const styles={
  first:{
    borderRadius:'9px',
    margin:'20px',
    height:'150px',
    backgroundColor:'#eeeeee',
    margintop:'30px',
    border:'2px solid #ccc',
  },
  subscribe:{
    width:'40vw',
  },
  container:{
    display:'flex',
    justifyContent:'center',
  }
}