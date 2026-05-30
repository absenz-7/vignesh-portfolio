import React from "react";
import "./works.css";

const Works =()=>{
    return (
        <>
        <div className="myworks">
            <div className="first"></div>
                <div className="second"></div>
                <div className="skills">
                    <h3 className="sk-head">Skills and Technologies</h3>
                    <h3 className="sk-bio">I work with modern tools and technologies to build fast<br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and efficient web applications</h3>
                    <div className="pyt-bg"></div>
                    <div className="python">
                    <img className="py" src="python.png" alt="python" 
                            width="80"
                            height="80"/></div>
                        <h3 className="py-head">PYTHON</h3>
                        <h3 className="py-bio">I enjoy working with Python because of <br></br>its simple syntax and versatility. I use it <br></br>to build projects, solve problems, and <br></br>continuously improve my programming<br></br>skills.</h3>
                          
                          <div className="javascript">
                         <div className="js-bg"></div>
                            <img className="js" src="java-script.png" alt="javascript" 
                                width="80"
                                height="80"/>
                            <h3 className="js-head">JAVA SCRIPT</h3>
                            <h3 className="js-bio">To create interactive and dynamic web <br></br>applications. It helps me build responsive<br></br>user interfaces and improve the overall<br></br>user experience of websites.</h3></div>
                          

                          <div className="html">
                         <div className="h-bg"></div>
                            <img className="h" src="html-5.png" alt="html" 
                                width="80"
                                height="80"/>
                            <h3 className="h-head">HTML</h3>
                            <h3 className="h-bio">I use HTML to create the structure and<br></br>foundation of web pages. It helps me<br></br>build clean, organized, and accessible<br></br>content for modern websites.</h3></div>
                
                </div>       
        </div>
        </>
    )
}
export default Works