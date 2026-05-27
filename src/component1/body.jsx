import React from "react";
import "./body.css";


const Body =()=>{
    return (
        <>
        <div className="container">
            <div className="split">
                <div className="nav">
                    <h3 className="my">Vignesh</h3>
                        <div class="nav-links">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Resume</a>
                        </div>

                </div>
                <div className="Image">
                    <img src="profile.jpg" alt="profile"
                    width="300"
                    height="400"/>

                </div>
                <div className="cont">
                    <h3 className="small">Hey,I am </h3>
                    <h1 className="big">Vigneshh</h1>
                    <h3 className="bio">BCA student passionate about coding, technology, and creative video editing.<br></br> Enthusiastic about learning new skills, building innovative solutions,<br></br> and growing in the IT industry.</h3>
                </div>
                <div className="works">
                    <h2></h2>
                </div>
                
            </div>
            <h3 className="lower"> Works I have done</h3>
            <div className="done">
                <a href="#">Explore my works</a>
            </div>
            
          </div>
        </>
    )
}
export default Body 