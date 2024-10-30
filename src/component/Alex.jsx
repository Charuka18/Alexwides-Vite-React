import { useState, useEffect } from 'react';

import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image6.jpg"
import Logo1 from "../assets/logo1.png"
import Logo2 from "../assets/logo2.png"
import Logo3 from "../assets/logo3.png"
import Logo4 from "../assets/logo4.png"
import Logo5 from "../assets/logo5.jpg"
import Logo6 from "../assets/logo6.png"
import Logo7 from "../assets/logo7.png"
import Logo8 from "../assets/logo8.png"
import tick from "../assets/tick.png"
import facebook from "../assets/facebook.png"
import inster from "../assets/instagram.png"
import logo from "../assets/Logo.png"

const Alex = () => {

  const images = [
    image1,image2,image3,image4,image5
  ];
  const logos = [
    Logo1,Logo2,Logo3,Logo4,Logo5,Logo6,Logo7,Logo8
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex -  1+ images.length) % images.length);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length );
    }, 3000);

    return () => clearInterval(interval);

    
  }, []);

  return (
    <div>
       <div className="Alex">
      <div className="content-alex-1">
      <p className="text-alex">my vision</p>
      </div>
    </div>
    <div className='background-alex'>
      <div>
      <div className="Reasons-alex" id="reasons">
        <div className="right-r-alex-1">
          
          <div>
            <span className="topic-alex">EXTREME PANORAMIC LANDSCAPES</span>
          </div>
          <div>
            <div className='details-alex'>
              <span>Since 2008 I have tried to experience the beauty of nature in a special way: my expeditions, my climbs, the weeks spent in tents, are the most important thing, the experience. Over the years I have perfected an absolutely exclusive <span className="contact">photographic technique</span>, I have mastered the use of the ultra wide lens falling in love with the very large field of views and that allowed me to capture everything I saw. Today my gallery and my philosophy of landscape does in heart gathers exclusive views between 180 and 360.</span>
            </div>
            <div className='details-alex'>
              <span>In my journey I have learned to make my memories unique, personalizing the photographic experience as much as possible and empowering the viewer to experience my travels through wide and complete views. Photographing everything around me is for me the thing that best tells the story of the moments and nature I love to experience.</span>
            </div>
            <div className='details-alex'>
              <span>In my projects, there is not only a refinement of technique but a constant challenge to communicate to my audience the beauty and uniqueness of the most beautiful places I am fortunate to be able to visit. Each of my panoramas is a narrative, it is an experience, it is a moment of intimate connection with the landscape and wild life. I love photography more than anything else.</span>
            </div>
          
          <div className='image-alex'  style={{ position: 'relative', width: '', margin: '0 auto' }}>
      
            <img src={images[currentIndex]} alt="Slide" style={{ width: '50%', borderRadius: '10px' }}/>
            <img src={images[(currentIndex + 1) % images.length]} alt="Slide 2" style={{ width: '50%', borderRadius: '10px' }}/>
      
      
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                padding: '2px',
                cursor: 'pointer',
              }}
            >
             ❮
            </button>


            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                padding: '2px',
                cursor: 'pointer',
              }}
            >
             ❯
            </button>
          </div>
          
          <div className='details-alex'>
            <span>Through my photography, I aim to inspire thousands of individuals who may not have the opportunity to travel, encouraging them to be curious and appreciate the wonders of nature. With each image, I hope to ignite a sense of wonder and connection to the world around us, fostering a deep appreciation for the beauty that surrounds us.</span>
          </div>
          </div>
        </div>
        <div className="left-r-alex-1">
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
    <div >
      <center><img src={image5} alt="" style={{ width: '100%', borderRadius: '10px' }}/></center>
      <center><span className="topic">AWARDS & HONORS</span></center>
    </div><center>
    <div className='logo-alex' >
      
            <img src={logos[currentLogo]} alt="Slide" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 1) % images.length]} alt="Slide 2" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 2) % images.length]} alt="Slide 3" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 3) % images.length]} alt="Slide 4" style={{ width: '15%', borderRadius: '10px' }}/>
            <img src={logos[(currentLogo + 4) % images.length]} alt="Slide 5" style={{ width: '15%', borderRadius: '10px' }}/>
      </div></center>

      <div className="Reasons-alex" id='reasons'>
        <div className="left-alex">
                <div>
                    <img src={tick} alt="" className='tick'></img>
                    <span>    Published in CNN Arabic with a dedicated article</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Exhibited in Xposure Photo Festival 2024</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'></img>
                    <span>    Project of the Year to Memorial Maria Luisa Photo Festival 2024</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded in Top 10 World's Landscape Photographers 2024</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Runner Up title at the Xposure festival photography and film 2022</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Title of Country's Top 10 Landscape Photographers of the Year 2019 and finalist in the main contest at One Eyeland Awards</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded with 3 Gold Medal and 17 Silver Medal on Epson Pano Awards 2019</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Finalist at Astronomy Photographer of The Year 2019.</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Second place award in Panoramic category at International Photography Awards 2019</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Gold Medal in Nature Panoramic and Silver Medal in Fine Art Landscape at Moscow Photography Awards 2019</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded in Panoramic category at International Photography Awards 2018.</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded with 6 Bronze Medal, 1 Silver medal and 2 Gold Medal at Epson Pano Awards 2018</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Silver Medal in Fine Art and Special Panoramic at One Eyeland Landscape photo contest 2018.</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Finalist at Siena Photography Awards 2018</span>
                </div>
            

        </div>
        <div className="right-alex">
                <div>
                    <img src={tick} alt="" className='tick'></img>
                    <span>    Title of Country’s Top 10 Landscape Photographers of the Year 2019 and finalist in the main contest at One Eyeland Awards</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded with 3 Gold Medal and 17 Silver Medal on Epson Pano Awards 2019</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Finalist at Astronomy Photographer of The Year 2019.</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Second place award in Panoramic category at International Photography Awards 2019</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Gold Medal in Nature Panoramic and Silver Medal in Fine Art Landscape at Moscow Photography Awards 2019</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded in Panoramic category at International Photography Awards 2018.</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Awarded with 6 Bronze Medal, 1 Silver medal and 2 Gold Medal at Epson Pano Awards 2018</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Silver Medal in Fine Art and Special Panoramic at One Eyeland Landscape photo contest 2018</span>
                </div>
                <div>
                    <img src={tick} alt="" className='tick'/>
                    <span>    Finalist at Siena Photography Awards 2018</span>
                </div>
                           
        </div>
      </div>
        <div className='contp'>
        <center><img src={logo} alt="" className='contlogo'/></center>
        <p className='lastp'>Copyright 2019 - 2024 |   All Rights Reserved   |   Alessandro Cantarelli Partita Iva N° 12972751007</p>
        <center><img src={facebook} alt="" className='conticon'/><img src={inster} alt="" className='conticon'/></center>
      </div>
    

  </div>
</div>
  )
}

export default Alex
