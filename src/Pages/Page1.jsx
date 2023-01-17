import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import demoImg from "../image/bookDemo.jpg"
// import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import banner from "../image/bookBanner.jpg";
import "./Page1.css";
import Demo from "../Components/Demo/Demo";

const Page1 = () => {
  const [bookData, setbookData] = useState("");
  const search = "react"
  useEffect(()=>{
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyDe4a7MxpVkXRZ7pB7e72eSYjBv1M3-gdQ").then(res=>setbookData(res)).catch(err=>console.log(err))
  },[])
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="banner">
          <img className="banner-image" src={banner} alt="" />
        </div>
        <div className="latest-books">
          <div className="title">
            <h2>Latest Books</h2>
          </div>
          <div className="wrapper">
            <div className="card-holder">
              <Demo thumbnail={demoImg} amount={"200"} />
              <Demo thumbnail={demoImg} amount={"200"} />
              <Demo thumbnail={demoImg} amount={"200"} />
              <Demo thumbnail={demoImg} amount={"200"} />
            </div>
            <hr className="mb" />
          </div>
        </div>

        <div className="latest-books">
          <div className="title">
            <h2>Our BestSeller Books</h2>
          </div>
          <div className="wrapper">
            <div className="card-holder">
              <Demo thumbnail={demoImg} amount={"200"} />
              <Demo thumbnail={demoImg} amount={"200"} />
              <Demo thumbnail={demoImg} amount={"200"} />
              <Demo thumbnail={demoImg} amount={"200"} />
            </div>
            <hr className="mb" />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Page1;
