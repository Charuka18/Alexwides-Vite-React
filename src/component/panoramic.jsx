import { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import Logo1 from "../assets/logo1.png"
import Logo2 from "../assets/logo4.png"
import Logo3 from "../assets/logo2.png"

const Panoramic = () => {
  const images = [image1, image2, image3, image4];
  const texts1 = ["EXTREME PANORAMIC LANDSCAPES VOL. 1", "EXTREME PANORAMIC LANDSCAPES VOL. 1", "EXTREME PANORAMIC LANDSCAPES VOL. 1", "EXTREME PANORAMIC LANDSCAPES VOL. 1"];
  const texts2 = ["VIDEOTUTORIAL", "VIDEOTUTORIAL", "VIDEOTUTORIAL", "VIDEOTUTORIAL"];
  const texts3 = ["THE WORLD'S FIRST AND ONLY COURSE DEVELOPED SPECIFICALLY FOR LANDSCAPE PANORAMIC PHOTOGRAPHY", "THE WORLD'S FIRST AND ONLY COURSE DEVELOPED SPECIFICALLY FOR LANDSCAPE PANORAMIC PHOTOGRAPHY", "THE WORLD'S FIRST AND ONLY COURSE DEVELOPED SPECIFICALLY FOR LANDSCAPE PANORAMIC PHOTOGRAPHY", "THE WORLD'S FIRST AND ONLY COURSE DEVELOPED SPECIFICALLY FOR LANDSCAPE PANORAMIC PHOTOGRAPHY"];
  const texts4 = ["Subtitles in: Spanish, Japanese, Italian, Russian, English, Chinese", "Subtitles in: Spanish, Japanese, Italian, Russian, English, Chinese", "Subtitles in: Spanish, Japanese, Italian, Russian, English, Chinese", "Subtitles in: Spanish, Japanese, Italian, Russian, English, Chinese"];
  const button = ["enroll now ->","enroll now ->","enroll now ->","enroll now ->"];

  
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-black text-white'>
        <div className="relative">
            <img className="w-full h-[80vh] md:h-[100vh] object-cover" src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
            <div className="absolute left-5 top-10 text-center md:left-28 md:top-36">
                <p className="text-2xl text-left md:text-3xl font-medium uppercase">{texts1[currentImage]}</p><br /><br />
                <p className="text-4xl text-left md:text-8xl font-bold uppercase">{texts2[currentImage]}</p><br /><br />
                <p className="text-1xl text-left md:text-3xl uppercase">{texts3[currentImage]}</p><br /><br />
                <p className="text-1xl text-left md:text-1xl ">{texts4[currentImage]}</p><br /><br />
                <button className="mt-4 absolute left-20 px-4 py-2 bg-white border border-yellow-400 text-black hover:bg-yellow-400 hover:text-black transition">{button[currentImage]}</button><br /><br />
            </div>
        </div>
        <div className='bg-white text-black'>
            <div className="p-6 md:p-12 grid gap-4 md:grid-cols-2">
                <div><br /><br /><br />
                    <div>
                        <span className="text-2xl text-left md:text-3xl font-medium uppercase">MEET ALEX WIDES</span>
                    </div><br />
                    <div>
                        <span>Alex Wides is a multi prestigious awards winning photographer, recognized all over the world for creating a unique style of fine art landscape photography: the Extreme Panoramas with field angles up to 360° that shows the viewer everything Alex sees around him when he reaches the most remote places in the world.</span>
                    </div>
                </div>
                <div>
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
        <div><br /><br />
            <div className="p-6 md:p-12 grid gap-4 md:grid-cols-2">
                <div>
                    <img src={image3} alt="" />
                </div>
                <div>
                    <span className="text-3xl md:text-5xl font-bold uppercase"> WHAT SETS THIS COURSE APART?</span><br /><br /><br />
                    <span className="text-1xl md:text-2xl">UNLIKE GENERIC PHOTOGRAPHY COURSES, THIS IS TAILORED SPECIFICALLY FOR DAYLIGHT LANDSCAPE PANORAMIC PHOTOGRAPHY. WITH A FOCUS ON DETAIL AND DEPTH, ALEX OFFER EXCLUSIVE INSIGHTS AND TECHNIQUES THAT YOU WON’T FIND ANYWHERE ELSE.</span>
                </div>
            </div>
        </div>  
        <div className="bg-[url('../assets/image4.jpg')]">
            <div className="p-6 md:p-12 grid gap-4 md:grid-cols-3">
                <div className="righpano">
                    <center><img src={Logo1} alt="" style={{ width: '70%', borderRadius: '10px' }} /></center><br /><br />
                    <div className="text-2xl md:text-4xl font-medium uppercase"><span>COMPREHENSIVE</span></div><br />
                    <div className='pano-cart2'><span>This course takes you on a journey from beginner to expert, covering everything from basic principles to advanced strategies.</span></div>
                </div>
                <div className="righpano">
                    <center><img src={Logo2} alt="" style={{ width: '53%', borderRadius: '10px' }}/></center><br />
                    <div className="text-2xl md:text-4xl font-medium uppercase"><span>STRUCTURED</span></div><br />
                    <div className='pano-cart2'><span>Dive into 20-video chapter series, meticulously crafted to guide you through every aspect of panoramic photography. From equipment setup to post-processing.</span></div>
                </div>
                <div className="righpano">
                    <center><img src={Logo3} alt="" style={{ width: '60%', borderRadius: '10px' }}/></center>
                    <div className="text-2xl md:text-4xl font-medium uppercase"><span>EXCLUSIVE</span></div><br />
                    <div className='pano-cart2'><span>Gain access to insider tips and tricks honed through years of hands-on experience. Learn the secrets behind capturing awe-inspiring panoramas.</span></div>
                </div>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  );
};

export default Panoramic;
