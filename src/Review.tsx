import React from 'react'
import "./App.css";
const Review = ({ values }: any) => {
    console.log(values)
    return (
        <div>
            <h1>Review</h1>
            <p>{values.first_name}</p>
            <p>{values.last_name}</p>
            <p>{values.address}</p>
            <p>{values.city}</p>
            <p>{values.zip_code }</p>
        </div>
    )
}

export default Review
