import React from "react";
import Body from "./component1/body";
import Works from "./component1/works";
import About from "./component1/about";


const App =()=>{
  return (
    <>
    <section id="home">
    <Body/>
    </section>

    <section id="skill">
    <Works/>
    </section>

    <section id="about">
    <About/>
    </section>
    </>
  )
}
export default App