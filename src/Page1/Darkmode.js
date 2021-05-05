import React, { useState, useEffect } from "react";

export function ChangeColor(bgColor) {
  const bodyElt = document.querySelector("body");

  if (bgColor === true) {
    bodyElt.style.backgroundColor = "black";
    document.getElementById("text").style.color = "white";
    document.getElementById("github").style.color = "white";
    document.getElementById("github").style.backgroundColor = "black";
    document.getElementById("linkdin").style.color = "white";
    document.getElementById("linkdin").style.backgroundColor = "black";
    document.getElementById("reseaux").style.color = "white";
    document.getElementById("reseaux").style.backgroundColor = "black";
  } else {
    bodyElt.style.backgroundColor = "white";
    document.getElementById("text").style.color = "black";
    document.getElementById("github").style.color = "black";
    document.getElementById("github").style.backgroundColor = "white";
    document.getElementById("linkdin").style.color = "black";
    document.getElementById("linkdin").style.backgroundColor = "white";
    document.getElementById("reseaux").style.color = "black";
    document.getElementById("reseaux").style.backgroundColor = "white";
  }
}

export default ChangeColor;
