import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Page2.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Card from "../Components/Card/Card";

const Page2 = () => {
  const [search, setSearch] = useState("");
  const [bookData, setbookData] = useState([]);
  const searchBookBtn = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyDe4a7MxpVkXRZ7pB7e72eSYjBv1M3-gdQ"
      )
      .then((res) => setbookData(res.data.items))
      .catch((err) => console.log(err));
  };
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      //   setSearch(evt.target.value);
      //   evt.target.value = "";

      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDe4a7MxpVkXRZ7pB7e72eSYjBv1M3-gdQ"
        )
        .then((res) => setbookData(res.data.items))
        .catch((err) => console.log(err));
    }
    // evt.target.value = "";
  };
  return (
    <>
      <Navbar />
      <section className="content">
        {/* <div className="search-area"></div> */}
        <div className="search-area">
          <div className="search">
            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyDown={searchBook}
              placeholder="Search a author or by name..."
              autoComplete="off"
            />
            <div className="search-icon" onClick={searchBookBtn}>
              <FaSearch className="s-icon" />
            </div>
          </div>
        </div>
        <div className="search-result">
          <div className="title">
            <h2>Results</h2>
          </div>
          <hr className="mb" />
          <div className="result">
            <Card book={bookData} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page2;
// AIzaSyDe4a7MxpVkXRZ7pB7e72eSYjBv1M3-gdQ
