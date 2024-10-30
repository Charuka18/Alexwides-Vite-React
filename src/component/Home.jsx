import { useState, useEffect } from "react"

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import Logo1 from "../assets/logo1.png"
import Logo2 from "../assets/logo2.png"
import Logo3 from "../assets/logo3.png"
import Logo4 from "../assets/logo4.png"
import Logo5 from "../assets/logo5.jpg"
import Logo6 from "../assets/logo6.png"
import Logo7 from "../assets/logo7.png"
import Logo8 from "../assets/logo8.png"
import facebook from "../assets/facebook.png"
import inster from "../assets/instagram.png"
import logo from "../assets/logo.png"

const Home = () => {
  const images = [image1, image2, image3, image4];
  const texts1 = ["extreme panoramic", "extreme panoramic", "extreme panoramic", "extreme panoramic"];
  const texts2 = ["landscapes", "landscapes", "landscapes", "landscapes"];
  const buttons = ["view portfolio", "view portfolio", "view portfolio", "view portfolio"];

  const logos = [
    Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8
  ];
  const slides = [
    {
      image: image3,
      topic: "Blog",
      title: 'Capturing the Magic of Atacama Desert: A Photographer’s Dream',
      description: `An extraordinary journey as we combine our passion for mountains and astrophotography in a 15-day tent expedition.`
    },
    {
      image: image4,
      topic: "Blog",
      title: 'Exploring the Northern Lights',
      description: `The Northern Lights are one of nature's most spectacular displays. Our journey took us to the Arctic Circle to witness this breathtaking phenomenon...`
    },
    {
      image: image2,
      topic: "Blog",
      title: 'The Majesty of the Himalayas',
      description: `Join us on an adventure to the roof of the world. The Himalayas offer an unmatched experience of nature's grandeur...`
    },
    {
      image: image1,
      topic: "Blog",
      title: 'Senja Island Wild Camping Thototour',
      description: `Alex Wides is a multi prestigious awards winning photographer, recognized all over the world for creating a unique style of fine art landscape photography: the Extreme Panoramas with field angles up to...`
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentLogo((prevIndex) => (prevIndex + 1) % logos.length );
      setCurrentSlide((prevSlides) => (prevSlides + 1) % slides.length );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='home'>
      <div className="image-slider-home">
        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
        <div className="text-overlay1-home">{texts1[currentImage]}</div>
        <div className="text-overlay2-home">{texts2[currentImage]}</div>
        <button className="text-overlay3-home">{buttons[currentImage]}</button>
      </div>

      <div className="Reasons-home1" id="reasons">
        <div className="right-r-home-1">
          
          <div>
            <span className="stroke-text">alex</span>
            <span> wides</span>
          </div>
          <div>
            <span className="topic-home">panoramic addicted</span>
          </div>
          <div className="details-r-home">
            <div>
              <span>
                Alex Wides is a multi prestigious awards winning photographer, recognized all over the world for creating a unique style of fine art landscape photography: the Extreme Panoramas with field angles up to 360° that shows the viewer everything Alex sees around him when he reaches the most remote places in the world.
              </span>
            </div>
          </div>
        </div>
        <div className="left-r-home-1">
          <img src={image1} alt="" />
        </div>
      </div>

      <div className="background1-home">
        <div className="Reasons-home1" id="reasons">
          <div className="left-r-home-1">
            <img src={image3} alt="" />
          </div>
          <div className="right-r-home-1">
            <div className="details-r-home">
              <div>
                
              <section className="card-home">
                <br /><br />
              <div className='home-cart1'><span className="stroke-text">prints</span>
              <span> & licensing</span></div>
              <br /><br /><br />
                <span>
                  You can purchase your giant panorama photo print, Luxury limited edition fine art frames. Feel free to
                  <span className="contact"> contact me</span>
                  <span> to discuss about your projects</span>
                </span>
                <br /><br /><br />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='logoback-home'>
      <span className='as_seen'> as seen in</span>
      <center>
    <div className='logo-alex' style={{ position: 'relative', width: '100%' }}>
      
            <img src={logos[currentLogo]} alt="Slide" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 1) % images.length]} alt="Slide 2" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 2) % images.length]} alt="Slide 3" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 3) % images.length]} alt="Slide 4" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 4) % images.length]} alt="Slide 5" style={{ width: '15%', borderRadius: '10px' }}/>
      </div></center>
      </div>

      <div>
      <div className="background2">
        <div className="Reasons-home2" id="reasons">
          <div className="lefthome">
            <div>
            <section className="card-home">
                <div className='home-cart1'><span>algarve portugal phototour</span></div>
                <div className='home-cart2'><span>8-15 december 2024</span></div>
                <div className='home-cart3'><span>A memorable journey of seascape panoramas through best landscapes in Porugal</span></div>
                <div><center><button className='home-cart-btn'>see more</button></center></div>
            </section>
            </div>
            <div className='home-cart-image'><img src={image3} alt="" style={{ width: '95%', borderRadius: '10px' }}/></div>
          </div>
          <div className="righhome">
            <div>
              <section className="card">
                <div className='home-cart1'><span>senja island wild camping thototour</span></div>
                <div className='home-cart2'><span>6-13 october 2024</span></div>
                <div className='home-cart3'><span>An unforgettable adventure to the majestic fjords. With fishing and bonfires under auroras</span></div>
                <div><center><button className='home-cart-btn'>see more</button></center></div>
              </section>
              </div>
              <div className='home-cart-image'><img src={image1} alt="" style={{ width: '95%', borderRadius: '10px' }}/></div>
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-container">
      <h2 className="carousel-title">BLOG & UPDATES</h2>

      <div className="carousel">
        <button className="carousel-button left" onClick={prevSlide}>❮</button>

        <div className="carousel-slide">
          <img src={slides[currentSlide].image} alt="Slide" className="carousel-image" />

          <div className="carousel-text">
            <p className="carousel-topic">{slides[currentSlide].topic}</p>
            <h3 className="carousel-subtitle">{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>

        <button className="carousel-button right" onClick={nextSlide}>❯</button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      <button className="view-all-posts-button">VIEW ALL POSTS</button>
    </div>

      <div className='contp'>
        <center><img src={logo} alt="" className='contlogo'/></center>
        <p className='lastp'>Copyright 2019 - 2024 |   All Rights Reserved   |   Alessandro Cantarelli Partita Iva N° 12972751007</p>
        <center><img src={facebook} alt="" className='conticon'/><img src={inster} alt="" className='conticon'/></center>
      </div>
    </div>
  );
};

export default Home;
