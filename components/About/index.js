import React from 'react';
import coverImage from "../../assets/cover/background.jpg";

function About() {
    return (
       <div> 
        <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
        </div>
      );
}

export default About;
