import React from 'react'
import data from '../list'
import '../Home/free.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Freebook from '../../Assets/download.jpeg'


export default function Content() {
  console.log(data)
  
    return(
      <>
      <div style={styles.welcome}>
      <h1 style={styles.heading}>Happy Reading! :)</h1>
      <p>
      “A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”
      </p>
      </div>
     <div style={styles.Container}>

     {data.map((book, index) => (
                        <Card key={index} className='card'>
                            <Card.Img variant="top" src={book.link} style={styles.Card}/>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='details'><span>RS:{book.price}</span> <span>{book.author}</span></div>
                                <div style={styles.button}><Button style={styles.Button}>ByeNow</Button></div>
                      
                            </Card.Body>
                        </Card>
                    ))}

     </div>
      </>
    )

  
  
}
const styles = {
  heading:{
    color:'green'
  },
  welcome:{
textAlign:'center',
fontSize:'26px',
marginTop:'45px',
fontFamily:'Georgia, serif',
marginBottom:'45px',
lineHeight:'55px'
  },
  Container:{
    marginTop:'30px',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
  },
  Card:{
    width:'18rem',
  },
  button:{
    display:'flex',
    justifyContent:'center',
    marginTop:'10px',
    padding:'7px 20px',

  },
 Button:{
backgroundColor:'green'
  }
}
