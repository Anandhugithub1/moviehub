import React from 'react';
import 'animate.css'; 
import { SocialIcon } from 'react-social-icons'

const Footer = () => {

  

  return (
    <>
     <div className="footer">
                <ul>
                    <li>
                      <a href='https://www.linkedin.com/in/anandhu-a-b386a6256?utm_source=share&utm_campaign=share_via&utm_content=profile'>

                      <SocialIcon network='linkedin'/>

                      </a>
 
                    </li>
  
                 
                  

                </ul>
                <p  className="animate__animated animate__fadeIn animate__infinite">  by </p>
               


            </div>
    </>
  )
  
};

export default Footer;
