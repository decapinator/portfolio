import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

function Like() {
  const uri = "https://porfolio-backend.vercel.app/likes/getLikes";
  const postUri = "https://porfolio-backend.vercel.app/likes/updateLikes";

  const [numLike, updateLike] = useState(0);
  const [likeCounter, upadteCounter] = useState(0);
  const [btnState, upadteBtn] = useState(true);
  const [likeClass, updateClass] = useState("fa fa-heart-o");

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        updateLike(res.data.data);
        upadteBtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function clickHandler() {
    updateClass("fa fa-heart-o animate-like");
    updateLike(numLike + 1);
    upadteCounter(likeCounter + 1);

    if (likeCounter >= 0) {
      upadteBtn(true);
    }

    axios
      .post(postUri)
      .then((res) => {
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      updateClass("fa fa-heart-o");
    }, 500);
  }

  return (
    <Nav.Item className="like-item">
      <Button
        className="like-btn"
        target="_blank"
        onClick={clickHandler}
        disabled={btnState}
      >
        <i
          className={likeClass}
          aria-hidden="true"
          style={{ color: "#fb6fcd" }}
        ></i>{" "}
        {numLike}
      </Button>
    </Nav.Item>
  );
}

export default Like;
