import React from "react";
// import bookImg from "../../image/bookDemo.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import {BsStarHalf} from 'react-icons/bs';
import "./Card.css";

const Card = ({ book }) => {
  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <div key={index} className="card">
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
          );
        }
      })}
    </>
  );
};

export default Card;
