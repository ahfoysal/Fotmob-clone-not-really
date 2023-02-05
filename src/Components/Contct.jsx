

import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    const Wrapper = styled.section`
            max-width: 600px;
    margin: 0px auto 100px;
    text-align: center;
     .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
}
 .overline::before {
    bottom: 0px;
    font-size: var(--fz-sm);
}
.overline::before {
    position: relative;
    bottom: 0px;
    counter-increment: section 4;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md),3vw,var(--fz-xl));
    margin-top: 15px;
    font-weight: 400;
}
 .title {
    font-size: clamp(40px, 5vw, 60px);
}
 .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
}
@media (max-width: 1080px){


}
  @media (max-width: 768px){
    
    margin: 0px auto 50px;

}

    `
  return (
    <Wrapper>
        <h2 className='overline'>What’s Next?</h2>
        <h2 className="title">Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet, perspiciatis sint odit aspernatur 
            delectus quos a illo deleniti non quia.</p>
            <a href="##" className='email-link'>Say Hello</a>
        
    </Wrapper>
  )
}

export default Contact