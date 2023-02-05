import React from 'react'
import styled from 'styled-components'
import data from '../Json/Language.json'
import img from '../Image/my_pic.jpg'

const About = () => {
    const Wrapper = styled.section`
        max-width: 900px;

        .num-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,var(--fz-heading));
    white-space: nowrap;
}
.num-heading::before {
    position: relative;
    bottom: 4px;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md),3vw,var(--fz-xl));
    margin-top: 15px;
    font-weight: 400;
}
.num-heading::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
    margin-top: 15px;
}
 .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
}
       p{
        font-size: var( --fz-lg);
       } 

        ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
}
 ul.skills-list li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
}
 ul.skills-list li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
}
.about-pic{
    position: relative;
    max-width: 300px;
}
.wrapper {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
}
 .wrapper::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
}
 .wrapper::before, .iTdkQf .wrapper::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
}
.wrapper .img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
}
.div img {
    bottom: 0;
    height: 100%;
    left: 0;
    margin: 0;
    max-width: none;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
}
.imgs {
    opacity: 0;
    transform: translateZ(0);
    transition: opacity .25s linear;
    will-change: opacity;
}
 .wrapper::after {
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
}
.wrapper::before,  .wrapper::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
}
@media (max-width: 1080px){


}
  @media (max-width: 768px){
     .inner {
    display: block;
}
.about-pic   {
    margin: 50px auto 0px;
    width: 70%;
}
}

    `
    
  return (
    <Wrapper>
        <h2 className='num-heading'> About Me</h2>
        <div className="inner">
            <div className="about-info">
                <div>
                    <p>Hello...."Lorem ipsum dolor sit amet, consectetur
                         adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                          d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."" 
                          </p>
                          <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                           velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                          </p>
                          <p>Here are a few technologies I’ve been working with recently:</p>
                            <ul className='skills-list'>
                               {data.map((name) =>( <li key={name.name}>{name.name}</li> ))}
                            </ul>
                </div>
            </div>
            <div className="about-pic">
                <div className="wrapper">
                    <div className="wrap-img img">
                        <div className="div" style={{ maxWidth: '500px', display: 'block' }}>
                            <img src={img} alt="" style={{maxWidth: "100%",display: "block",  position: "static" }}  />
                        </div>
                        {/* <div style={{    opacity: '0',
                             transition: 'opacity 500ms linear 0s',
                            backgroundColor: 'rgb(232, 232, 232)',
                                  position: 'absolute',
                                        inset: '0px',
                                    objectFit: 'cover'}}>
                                            <img src={img} alt=""  className='imgs' style={{ objectFit: 'cover', opacity: '1'}}/>
                        </div> */}
                    </div>

                </div>
            </div>

        </div>
        
    </Wrapper>
  )
}

export default About