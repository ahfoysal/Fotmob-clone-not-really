

import React from 'react'
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';



const Footer = () => {
    const Wrapper = styled.footer`
                display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center; 
    .footer-icons{
        display: none;
    }   
    p {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1;
}
@media (max-width: 1080px){


}
  @media (max-width: 768px){
  .footer-icons{
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;
    color: var(--light-slate);
  }
  .social-icons{
   
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
    margin-bottom: 10px;
}
li a {
   padding: 10px;
}
   .social-icon{
   font-size: 20px;
   color: var(--light-slate);
         transition-duration: 500ms;

       }
     

   .social-icon:hover, .social-icon:focus {
   color: var(--green);
   transform: translateY(-5px);
   transition: 500ms;
  
       }


}

    `
  return (
    <Wrapper>
            <div className="footer-icons">
            <ul className='social-icons'>
                <li> <a href="##"> <FiGithub  className='social-icon'/> </a> </li>
                <li> <a href="##"> <FiInstagram  className='social-icon'/> </a> </li>
                <li> <a href="##"> <FiFacebook  className='social-icon'/> </a> </li>
                <li> <a href="##"> <FaWhatsapp  className='social-icon'/> </a> </li>


            </ul>

            </div>
                <p>Built by Pewds, Design inspired </p>
    </Wrapper>
  )
}

export default Footer