import React from "react";
import "./body.css";


const Body =()=>{
    return (
        <>
        <div className="container">
            <div className="split">
                <div className="nav">
                    <h3 className="my">PORTFOLIO</h3>
                        <div class="nav-links">
                            <a href="#home">Home</a>
                            <a href="#skill">Skills</a>
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
                <div className="buttons">
                    <a href="#" class="btn btn-primary">Hire me</a>
                    <a href="#about" class="btn1 btn-primary">About me</a>
                </div>
                <div className="git">
                    <a href="https://github.com/absenz-7">
                        <img src="github.png" alt="my picture" height="40" width="40" />
                    </a></div>
                    <div className="linked">
                    <a href="https://www.linkedin.com/in/vignesh-tb-4926b0266/">
                        <img src="linkedin.png" alt="my picture" height="40" width="40" />
                    </a></div>

                    <div className="line">
                        <svg height="200" width="10">
                            <line x1="5" y1="0" x2="5" y2="130" stroke="black" stroke-width="3" />
                        </svg>

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