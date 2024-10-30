
import "./contact.css"
import whatsapp from "../../assets/WhatsApp_icon.png"
import email from "../../assets/email.png"
import logo from "../../assets/Logo.png"
import facebook from "../../assets/facebook.png"
import inster from "../../assets/instagram.png"
const contact = () => {
  return (
    <div className='contactback'>
      <div>
      <p className="text-contact">let's talk!</p>
      <center><img src={whatsapp} alt="" className='wimage'/></center>
      <p className="text-phone">phone: <p >+39 392 3277373</p></p>
      </div>
      <div>
      <center><img src={email} alt="" className='eimage'/></center>
      <p className="text-phone">email: <p className='contemail'>info@alexwides.com</p></p>
      </div>
      <div className='contp'>
        <p>
        And for all inquiries about tours, private lessons, private trips and any collaboration please feel free to write to me directly at these contacts</p>
        <center><img src={facebook} alt="" className='conticon'/><img src={inster} alt="" className='conticon'/></center>
        <center><img src={logo} alt="" className='contlogo'/></center>
        <p className='lastp'>Copyright 2019 - 2024 |   All Rights Reserved   |   Alessandro Cantarelli Partita Iva N° 12972751007</p>
      </div>


    </div>
  )
}

export default contact

