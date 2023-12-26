import React, {useState, useEffect} from "react";
import axios from "axios";
const Home = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() =>{
    const fetchBlog = async () =>{
      const api = await axios.get(`https://mern-2023-api-youtube.onrender.com/api/blogs/allblogs`, {
        withCredentials : true,

      });
      console.log("Hello")
    }
    fetchBlog();
  }, [])
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const api = await axios.get(
          `https://mern-2023-api-youtube.onrender.com/api/blogs/allblogs`,
          {
            withCredentials: true,
          }
        );
        console.log("API Response:", api.data); // Log the response data
        console.log("Hello");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchBlog();
  }, []);
  
    return(
        <>
            <div className="container">
            <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            </div>
        </>
    )
}

export default Home