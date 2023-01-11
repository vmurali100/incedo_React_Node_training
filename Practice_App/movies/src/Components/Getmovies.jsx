import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
//import { response } from "express";
import Table from "./Table";
//import { json } from "body-parser";

const Getmovies = () => {
     const[movies,setmovies] = useState([]);

     const fetchmovies = () =>{
        axios.get("http://localhost:4000/movies").then((response) => {
        setmovies(response.data);
        });
     };
     
};
export default Getmovies;