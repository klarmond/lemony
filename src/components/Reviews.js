import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { useState } from 'react'
import person1 from "../img/review_person1.png"
import person2 from "../img/review_person2.png"
import person3 from "../img/review_person3.png"
import { IoIosArrowDropright } from "react-icons/io"


const Reviews = () => {

    const [reviewInd, setReviewInd] = useState(0);
    const [reviewContent, setReviewContent] = useState([{
        img: person1, 
        review: '"The Bruschetta was a burst of flavor, with perfectly toasted bread and a delicious tomato topping. A little taste of Italy in the heart of Chicago!"',
        name: "Leah and Paul"
    },
    {
        img: person2,
        review: '"The Greek Salad was a fresh delight with crisp veggies and tangy feta. It felt like a Mediterranean escape right here in Chicago!"',
        name: "Tim"
    },
    {
        img: person3,
        review: '"The Grilled Fish was cooked to perfection, with a smoky flavor and tender, flaky texture. It was like having a seaside dinner right here in the city!"',
        name: "Gary"
    },
    ])



    const handleChangeReview = () => {
        
        setReviewInd((prev) => (prev + 1) % reviewContent.length);
    }

  return (
    <>
        <Nav/>
        <div className='reviews-container'>
            <div className="reviews">
                <img className='reviews-img' src={reviewContent[reviewInd].img}  alt="" />
                <span onClick={handleChangeReview} className="next-review-btn"> <IoIosArrowDropright/> </span>
                <p className='reviews-name'>{reviewContent[reviewInd].name}</p>
            </div>
            <div className="review-words-wrapper">
                <p>{reviewContent[reviewInd].review}</p>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default Reviews