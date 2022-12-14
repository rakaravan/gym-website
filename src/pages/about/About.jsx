import React from 'react'
import './About.css';
import Header from '../../components/Header';
import header1 from '../../images/header1.jpg';
import story from '../../images/story.jpg';
import vision from '../../images/vision.jpg';
import mission from '../../images/mission.jpg';




const About = () => {
  return (
    <>
        <Header title="About Us" image={header1} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero eum saepe laboriosam modi earum vitae sapiente praesentium rerum ratione, ipsa accusantium a nobis aliquid dolorem aperiam ipsam expedita molestiae.
        </Header>

        <section className="about__story">
            <div className="container about__story-container">
              <div className="about__section-image">
                <img src={story} alt="Our Story Image" />
              </div>
              <div className="about__section-content">
                <h1>Our Story</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore debitis amet voluptas omnis molestiae, ad unde est. Architecto voluptatibus unde quod provident. Tempora, voluptatibus pariatur. Nihil iure consequuntur neque ut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam itaque nihil repudiandae eaque at veritatis, sapiente quaerat perferendis eum aspernatur quia illo doloribus nisi placeat.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem quo tempore.</p>
              </div>
            </div>
        </section>

        <section className="about__vision">
            <div className="container about__vision-container">
              
              <div className="about__section-content">
                <h1>Our Vision</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore debitis amet voluptas omnis molestiae, ad unde est. Architecto voluptatibus unde quod provident. Tempora, voluptatibus pariatur. Nihil iure consequuntur neque ut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam itaque nihil repudiandae eaque at veritatis, sapiente quaerat perferendis eum aspernatur quia illo doloribus nisi placeat.
                </p>
              </div>

              <div className="about__section-image">
                <img src={vision} alt="Our Vision Image" />
              </div>
            </div>
        </section>

        
        <section className="about__mission">
            <div className="container about__mission-container">
              <div className="about__section-image">
                <img src={mission} alt="Our mission Image" />
              </div>
              <div className="about__section-content">
                <h1>Our Mission</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore debitis amet voluptas omnis molestiae, ad unde est. Architecto voluptatibus unde quod provident. Tempora, voluptatibus pariatur. Nihil iure consequuntur neque ut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam itaque nihil repudiandae eaque at veritatis, sapiente quaerat perferendis eum aspernatur quia illo doloribus nisi placeat.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rem quo tempore.</p>
              </div>
            </div>
        </section>
    </>
  )
}

export default About