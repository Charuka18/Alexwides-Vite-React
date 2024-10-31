import whatsapp from "../assets/WhatsApp_icon.png"
import email from "../assets/email.png"
import logo from "../assets/Logo.png"
import facebook from "../assets/facebook.png"
import inster from "../assets/instagram.png"
const contact = () => {
  return (
    <div className='bg-black text-white'>
        <div className="background2-home ">
            <div className="absolute inset-x-0 top-60 text-center">
                <p className="text-5xl md:text-8xl font-bold uppercase">let's talk!</p><br /><br />
                <center><img src={whatsapp} alt="" style={{ width: '5%', borderRadius: '10px' }}/></center>
                <p className="font-bold text-black uppercase">phone: <p>+39 392 3277373</p></p><br /><br />
                <center><img src={email} alt="" style={{ width: '5%', borderRadius: '10px' }}/></center>
                <p className="font-bold text-black uppercase">email: <p className="lowercase">info@alexwides.com</p></p>
            </div>
        </div><br /><br />
        <div>
            <p>And for all inquiries about tours, private lessons, private trips and any collaboration please feel free to write to me directly at these contacts</p><br /><br />
            <center><img src={facebook} alt="" className='conticon'/><img src={inster} alt="" className='conticon'/></center>
            <center><img src={logo} alt="" className='contlogo'/></center>
            <p className='lastp'>Copyright 2019 - 2024 |   All Rights Reserved   |   Alessandro Cantarelli Partita Iva N° 12972751007</p><br /><br /><br /><br />
        </div>
    </div>
  )
}

export default contact

