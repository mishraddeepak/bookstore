import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Freebook from '../../Assets/download.jpeg'
import data from '../list'

import './free.css'



function Free() {
    const address = "https://media.istockphoto.com/id/1412637153/photo/magic-book-with-open-pages-and-abstract-lights-shining-in-darkness-literature-and-fairytale.jpg?s=612x612&w=0&k=20&c=rc3Bh74ePX8QPGnOi5oeEYOwFaJYsseXu8A0dGFqRzI="
    console.log(data[0].link)
    return (
        <>
            <div className='container'>

                    {data.map((book, index) => (
                        <Card key={index} className='card'>
                            <Card.Img variant="top" src={book.link} />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='details'><span>RS:{book.price}</span> <span>{book.author}</span></div>
                            </Card.Body>
                        </Card>
                    ))}

                </div>

        </>
            )
}
            export default Free
