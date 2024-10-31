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
import logo from "../assets/Logo.png"
import '../App.css'

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
    <div className='bg-black text-white'>
      <div className="relative">
        <img className="w-full h-[50vh] md:h-[70vh] object-cover" src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
        <div className="absolute inset-x-0 bottom-20 text-center">
          <h2 className="text-3xl md:text-5xl font-medium uppercase">{texts1[currentImage]}</h2>
          <h1 className="text-5xl md:text-8xl font-bold uppercase">{texts2[currentImage]}</h1>
          <button className="mt-4 px-4 py-2 bg-black border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            {buttons[currentImage]}
          </button>
        </div>
      </div>
      <div className="p-6 md:p-12 grid gap-4 md:grid-cols-2">
        <div className=""><br />
          <div><span className="uppercase text-5xl ">alex wides</span></div><br />
          <div><span className="uppercase text-2xl ">panoramic addicted</span></div><br />
          <div><span>Alex Wides is a multi prestigious awards winning photographer, recognized all over the world for creating a unique style of fine art landscape photography: the Extreme Panoramas with field angles up to 360° that shows the viewer everything Alex sees around him when he reaches the most remote places in the world.</span></div><br />
        </div>
        <div>
          <br />
          <img src={image1} alt="" />
          <br />
        </div>
      </div>

      <div className="background1-home">
        <div className="p-6 md:p-12 grid gap-4 md:grid-cols-2">
          <div>
            <br />
            <img src={image3} alt="" />
          </div>
          <div>
              <br /><br /><br />
              <div><span className="uppercase text-5xl ">prints & licensing</span></div>
              <br /><br />
                <span className="uppercase text-1xl ">
                  You can purchase your giant panorama photo print, Luxury limited edition fine art frames. Feel free to
                  <span className="text-yellow-300"> contact me</span>
                  <span> to discuss about your projects</span>
                </span>        
          </div>
        </div>
      </div>
      <div className='bg-black'><br /><br />
        <span className='uppercase text-3xl text-white'> as seen in</span>
        <br />
        <center>
        <div className='grid gap-4 grid-cols-5' style={{ position: 'relative', width: '60%' }}>
          <div><img src={logos[currentLogo]} alt="Slide" style={{ width: '80%', borderRadius: '10px' }}/></div>
          <div><img src={logos[(currentLogo + 1) % images.length]} alt="Slide 2" style={{ width: '80%', borderRadius: '10px' }}/></div>
          <div><img src={logos[(currentLogo + 2) % images.length]} alt="Slide 3" style={{ width: '80%', borderRadius: '10px' }}/></div>
          <div><img src={logos[(currentLogo + 3) % images.length]} alt="Slide 4" style={{ width: '80%', borderRadius: '10px' }}/></div>
          <div><img src={logos[(currentLogo + 4) % images.length]} alt="Slide 5" style={{ width: '80%', borderRadius: '10px' }}/></div>
          <br /><br />
        </div>
        </center>
      </div>

      <div>
        <div className="background2-home">
          <div className="p-6 md:p-12 grid gap-4 md:grid-cols-2">
            <div>
              <div>
                  <div className='uppercase text-5xl text-white text-center inset-x-1/4 p-3 font-medium'><span>algarve portugal phototour</span></div>
                  <div className='uppercase text-2xl text-white font-medium'><span>8-15 december 2024</span></div>
                  <div className='text-1xl text-white p-3 font-medium'><span>A memorable journey of seascape panoramas through best landscapes in Porugal</span></div>
                  <div><center><button class='bg-black p-1 border-2 border-yellow-400 text-yellow-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>see more</button></center></div>
              </div><br /><br />
              <div><img src={image3} alt="" style={{ width: '95%', borderRadius: '10px' }}/></div>
            </div>
            <div>
              <div>
                  <div className='uppercase text-5xl text-white text-center inset-x-1/4 p-3 font-medium'><span>senja island wild camping thototour</span></div>
                  <div className='uppercase text-2xl text-white font-medium'><span>6-13 october 2024</span></div>
                  <div className='text-1xl text-white p-3 font-medium'><span>An unforgettable adventure to the majestic fjords. With fishing and bonfires under auroras</span></div>
                  <div><center><button className='bg-black p-1 border-2 border-yellow-400 text-yellow-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>see more</button></center></div>
                </div><br /><br />
                <div><img src={image1} alt="" style={{ width: '95%', borderRadius: '10px' }}/></div>
            </div>
          </div>
        </div>
        
        <div className="bg-black text-white"><br /><br /><br />
          <h2 className="uppercase text-5xl text-white">BLOG & UPDATES</h2><br /><br />
          <div className="">
            <div className="p-6 md:p-12 grid gap-4 md:grid-cols-2">
              <div>
                <button className="absolute left-2 text-4xl" onClick={prevSlide}>❮</button>
                <img className="w-full"src={slides[currentSlide].image} alt="Slide"/>
              </div>
              <div className="">
                <button className="absolute right-2 text-4xl" onClick={nextSlide}>❯</button>
                <p className="text-white text-2xl absolute text-slate-300">{slides[currentSlide].topic}</p><br /><br /><br />
                <p className="w-3/4 text-white text-2xl font-medium uppercase text-slate-300">{slides[currentSlide].title}</p><br /><br /><br />
                <p className="w-3/4">{slides[currentSlide].description}</p><br />
                <button className="absolute right-96 bg-black p-1 border-2 border-yellow-400 text-yellow-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">Read More</button>
              </div>
            </div>
          </div>
          <div>
            {slides.map((_, index) => (
            <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} > </span>
            ))}
          </div><br /><br />
          <button className=" bg-black p-1 border-2 border-yellow-400 text-yellow-400 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">VIEW ALL POSTS</button><br /><br />
        </div>
        <div className='text-white'>
          <center><img src={logo} alt=""/></center>
          <p >Copyright 2019 - 2024 |   All Rights Reserved   |   Alessandro Cantarelli Partita Iva N° 12972751007</p><br />
          <center><img src={facebook} alt="" /><img src={inster} alt="" /></center>
        </div>
      </div>
    </div>
  );
};

export default Home;
