import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './Demo.css'

const Demo = ({thumbnail, amount}) => {
  return (
    <>
    <div className="card">
              <div className="card-img">
                <img src={thumbnail} alt="" />
              </div>
              <div className="card-details">
                <div className="name">
                  <h3>Name</h3>
                </div>
                <div className="price">
                  <p>&#8377; {amount}</p>
                </div>
                <div className="rating">
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                  <AiOutlineStar className="star" />
                  <AiOutlineStar className="star" />
                </div>
              </div>
            </div>
    </>
  )
}

export default Demo