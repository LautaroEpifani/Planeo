import {
    Header,
    Footer,
   } from '../components'
//import ShapeOverlaysGsap from '../components/ShapeOverlayGsap'
import ContactSection from '../components/ContactSection'
import Testimonials from "../components/Testimonials"
import Formulario from "../components/Formulario"
  
  function Contact() {
      return (
        <>
          <Header/>
           
          {/**<ShapeOverlaysGsap/> */}
          <ContactSection/>        
            <Formulario/>
             
          <Testimonials/>
          {/* Mapa responsive */}
            <div className="w-full h-64 md:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5986.437340620747!2d2.172471440937259!3d41.39105728415081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fc8176ca77%3A0xd56bea85d4c2a133!2sCarrer%20d&#39;En%20Ll%C3%A0stics%2C%202%2C%20Ciutat%20Vella%2C%2008003%20Barcelona!5e0!3m2!1ses-419!2ses!4v1734471492528!5m2!1ses-419!2ses"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> 

          <Footer/>
        </>
      );
  }
  
  export default Contact;