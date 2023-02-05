

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IoMdOpen } from  'react-icons/io'
import { FiGithub } from 'react-icons/fi';
import data from '../Json/Project.json';



const Projects = () => {
    const Wrapper = styled.section`
    margin: 0px auto;
    padding: 100px 0px;
    max-width: 1000px;
    .num-heading {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: clamp(26px,5vw,var(--fz-heading));
    white-space: wrap;
}
.type:nth-of-type(2n+1)  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    justify-content: end;
}
.num-heading::before {
    position: relative;
    bottom: 4px;
    counter-increment: section 3;
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
.projectss {
    list-style: none;
    padding: 0px;
    margin: 0px;
}   
.type:not(:last-of-type) {
    margin-bottom: 100px;
}
.type {
    position: relative;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;
}
.type:nth-of-type(2n+1) .project-content {
    grid-column: 7 / -1;
    text-align: right;
}
 .project-content {
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
}
.project-image:nth-of-type(2n+1)  {
    grid-column: 1 / 8;
}
 .project-image {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
    z-index: 1;
}

.project-overline {
    margin: 10px 0px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
}

     .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
}
a {
    position: relative;
    z-index: 1;
    color: var(--lightest-slate);
}
a:hover, a:focus {
    color: var(--green);
}
 .project-description {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
}
p:last-child, p:last-of-type {
    margin: 0px;
}
 .project-description a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
}
a::after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 4px;
    background-color: var(--green);
    transition: var(--transition);
    opacity: 0.5;
}


a:hover:after{
    width: 100%;
}
 .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    justify-content: start;
}
.type:nth-of-type(2n+1) .project-image {
    grid-column: 1 / 8 ;
}
.type:nth-of-type(2n+1) .project-tech-list li {
    margin: 0px 0px 5px 20px;
}
.project-tech-list li {
    margin: 0px 20px 5px 0px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
}
.type:nth-of-type(2n+1) .project-links {
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: 0px;
    margin-right: -10px;
} 
.project-links {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
}

.project-links a {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px;
}
 a {
    position: relative;
    z-index: 1;
}
.project-links a:hover:after{
    width: 00%;
}
 .project-image {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
    z-index: 1;
}
 .project-image a {
    width: 100%;
    height: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;
}
.project-image a {
    position: relative !important;
    z-index: 1 !important;
}
 .project-image a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 3;
    transition: var(--transition);
    background-color: var(--navy);
    mix-blend-mode: screen;
}
.project-image .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
   
}
.img2{
    max-width: 700px;
    display: block;
}

.img img {
    bottom: 0;
    height: 100%;
   
    left: 0;
    margin: 0;
    max-width: none;
    padding: 0;
    /* position: absolute; */
    right: 0;
    top: 0;
    width: 100%;
    object-fit: cover !important;
    opacity: 1;
 
    transform: translateZ(0);
    transition: opacity .25s linear;
    will-change: opacity;
}

@media (max-width: 768px){
    .type:nth-of-type(2n+1) .project-content {
    grid-column: 1 / -1 !important;
    padding: 40px 40px 30px;
    text-align: left;
}
.type .project-content {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1 !important  ;
    padding: 40px 40px 30px;
    z-index: 5;
}
.type .project-title {
    color: var(--white);
}
.type .project-title a {
    position: static;
}
.type:nth-of-type(2n+1) .project-links {
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-left: -10px;
    margin-right: 0px;
}
.type .project-title a::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
}
.type .project-description {
    padding: 20px 0px;
    background-color: transparent;
    box-shadow: none;
}
.type:nth-of-type(2n+1) .project-image {
    grid-column: 1 / -1;
}
.type .project-image {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
}
.type .project-content {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
}
 .project-title {
    margin: 0px 0px 20px;
}

.type .project-content {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
}
}
.type:not(:last-of-type) {
    margin-bottom: 70px;
}
.type {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
}
@media (max-width: 1080px){
    .type:nth-of-type(2n+1) .project-content {
    grid-column: 5 / -1;
}
.type .project-content {
    grid-column: 1 / 9;
}
.img img {
 
    filter: blur(3px);
}
}
    `
        useEffect(() => {
 console.log(data)
    
        }, [])
  return (
    <Wrapper>
               <h2 className='num-heading'> Some Things I’ve Built</h2>
        <ul className='projectss'>
            {data.map((pr) =>{
                return <li className="type">
                <div className="project-content">
                        <div>
                               {pr?.isFeatured === true && <p className="project-overline">Featured Project</p>}
                                <h3 className="project-title"><a href={pr.link}>{pr.title}</a></h3>
                                <div className="project-description">
                                    <p dangerouslySetInnerHTML={{ __html: pr?.details }}></p>
                                </div>
                               
                                <ul className="project-tech-list">
                                    {pr.technologies.map((tech) =>{
                                        return <li>{tech}</li>
                                    })}
                                       
                                        
                                </ul>
                                <div className="project-links">
    
                                  {pr.githubLink === false &&  <a href={'##'} onClick={() => alert('Source Code Private')}><FiGithub className='social-icon'/></a>}
                                  {pr.githubLink === true &&  <a href={pr?.gitLink}><FiGithub className='social-icon'/></a>}

                                    <a href={pr.link}><IoMdOpen className='social-icon'/></a>
                                </div>
    
                        </div>
                    </div>
                    <div className="project-image">
                            <a href={pr?.link}>
                                <div className="img">
                                <img src={pr.img} alt="" width={700} height={438}sizes="(min-width: 700px) 700px, 100vw" />
    
                                  
                                </div>
                            </a>
                    </div>
                </li>
            })}
            
           
           

        </ul>
       

    </Wrapper>
  )
}

export default Projects