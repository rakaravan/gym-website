import React from 'react';
import './Gallery.css';
import header3 from './../../images/header3.jpg';
import Header from './../../components/Header';

const Gallery = () => {

  const galleryLength = 15;
  const images = [];
  
  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  console.log(images);



  return (
    <>
      <Header title="Our Gallery" image={header3} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum culpa nulla tempora at impedit accusamus quaerat? Provident est possimus corrupti.
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery Image ${index}`} />
                </article>
              )
            })
          }
        </div>
      </section>


    </>
  )
}

export default Gallery