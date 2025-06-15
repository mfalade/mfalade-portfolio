import React from 'react';
import SocialIcons from '../components/SocialIcons';

const About = () => (
  <div className="about-root">
    <div className="section-label">
      <span className="section-bar"></span>
      <span className="section-title">ABOUT</span>
    </div>
    <h1 className="about-title">Fullstack Software Engineer</h1>
    <div className="about-summary">
      <p>If you know me well, you'd know I love cheesy lines like</p>
      <ul>
        <li>Software engineering is not just my hobby, it is my passion!</li>
        <li>I didn't choose the game, the game chose me!</li>
      </ul>
      <p>After I got my Bachelor's degree in computer science, I initially wanted to pursue a career in networking, but as fate would have it, I stumbled upon this awesome movie that we all love (or hate) - The Ironman. Tony Stark had an AI powered personal assistant named "Jarvis" and I was inspired to build my own version of this (which I named "Yaviz") using C++</p>
      <p>Thus began my journey into the world of software engineering.</p>
      <p>It didn't take me long after I started "Project Yaviz" before I realized that my computer science background only barely scratched the surface of what was needed to make this a reality. I immediately picked up e-books and reached out to a FOAF who was the only programmer I knew back then, Turns out this dude was a PHP web developer and couldn't help much with Yaviz. He did introduce me to the very exciting world of Web development however for which I am truly grateful Sunday Adeyemo.</p>
      <p>He gave me a book on the introduction to HTML & CSS which I started devouring. I was so captivated to learn how web pages were structured and how different artifacts like anchor tags, and images, and CSS worked. This would be the first book I'd ever read cover to cover. I would go on to build my own experimental version of the Nigerian Airways Website using my newly acquired skill</p>
      <p>I continued to learn web development on my own until I heard about this Talent Accelerator called Andela. Andela boasts that only the top 1% of applicants get hired. I immediately dropped my</p>
      <p>yazvi</p>
    </div>
    <SocialIcons variant="orange" />
    <hr className="about-divider" />
    <div className="about-hobbies">
      <h2>HOBBIES</h2>
      <p>A few of my hobbies are:</p>
      <ul>
        <li><span className="about-list-arrow">&raquo;</span> Outside of work you can find me either</li>
        <li><span className="about-list-arrow">&raquo;</span> Outside of work you can find me either</li>
        <li><span className="about-list-arrow">&raquo;</span> Outside of work you can find me either</li>
      </ul>
    </div>
    <hr className="about-divider" />
    <div className="about-certifications">
      <h2>CERTIFICATIONS</h2>
      <p>I have bagged the following certifications over the years:</p>
      <ul>
        <li><span className="about-list-arrow">&raquo;</span> A Bachelor of Science degree in Computer Science - LAUTECH</li>
        <li><span className="about-list-arrow">&raquo;</span> The art of public speaking - Speakers labs</li>
        <li><span className="about-list-arrow">&raquo;</span> Yea, that's all I've got. How pathetic. This is a wake up call that I need to get more certifications</li>
      </ul>
    </div>
  </div>
);

export default About; 