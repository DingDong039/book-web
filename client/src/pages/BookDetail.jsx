import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    const params = useParams();

    console.log(params);
  return (
    <>
        <h1>BookDetail</h1>
        {params.bookId}
    </>
  )
}

export default BookDetail