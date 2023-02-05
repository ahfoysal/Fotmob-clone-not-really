import React from 'react'
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';


const Leftbar = () => {
    const Wrapper = styled.div`
    .left-bar{
        width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    color: var(--light-slate);
}
    .social-icons{
   
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
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

        .social-icons::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
}
li:last-of-type {
    margin-bottom: 20px;
}
 @media (max-width: 1080px){
.left-bar{
    left: 20px;
    right: auto;
}

}
  @media (max-width: 768px){
  .left-bar{
    display: none;
  }
}
    `
  return (
    <div>
      <Wrapper>
        <div className="left-bar" orientation='left'>
            <ul className='social-icons'>
                <li> <a href="##"> <FiGithub  className='social-icon'/> </a> </li>
                <li> <a href="##"> <FiInstagram  className='social-icon'/> </a> </li>
                <li> <a href="##"> <FiFacebook  className='social-icon'/> </a> </li>
                <li> <a href="##"> <FaWhatsapp  className='social-icon'/> </a> </li>


            </ul>


        </div>


        
      </Wrapper>
    </div>
  )
}

export default Leftbar
