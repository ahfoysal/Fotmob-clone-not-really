import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";

const HeroSection = () => {
    const Wrapper = styled.section`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
    p{
        display: inline;
    }
     h1 {
    margin: 0px 0px 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
    font-weight: 400;
}
.big-heading {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
    text-align: center;
} 
.big-heading2 {
    margin: 0px;
    font-size: clamp(28px, 6vw, 70px);
}  
 h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
}
 p {
    margin: 20px 0px 0px;
    max-width: 540px;
}
p > a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
}
 .cv-link {
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
p > a:hover, p > a:focus, p > a:active {
    color: var(--green);
    outline: 3px !important;
}
a:hover, a:focus {
    color: var(--green);
}
:focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
}
p > a::after {
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
    `
      useEffect(() => {
        getCat();


       

        }, [])
        const [details , setDetails] = useState([]);

    const getCat = () =>{
        axios(`https://www.fotmob.com/api/matches?date=20230205&timezone=Asia%2FDhaka&ccode3=BGD`)
                .then(data2 => { const data = data2.data
                    console.log(data)
                    setDetails(data)
                
                 
                
        
          })
              
        
        
      }
  return (
    <Wrapper >
            {/* <div>
                <h1> Today  </h1>
            </div> */}
            <div>
                <h2 className='big-heading'>Today {details.date}    </h2>
            </div>
            {/* <div>
                <h3 className="big-heading2"> The only thing I Love is Coding.</h3>
            </div>
            <div>
                <p>Im a .................<br />
                ......................................... <br />
                   ................................ Find me  <a href="##">here</a>.
                </p>
            </div>
            <div>
                <a href="##" className="cv-link">Download My Resume</a>
            </div> */}
            <div>
                <div>
                { details?.leagues?.map(team => (
                        <div key={team?.id}> <p> {team?.name}</p>
                         { team?.matches?.map(test => (
                        <div key={test?.id}> <p> {test?.home.name} {test?.home?.score} -  {test.away.score}{test.away.name}
                        ({test?.status?.finished === true &&  <p>FT</p>}
                        <p>{test?.status?.liveTime?.long}</p>)
                        </p>
                        

                        
                         </div>
        )) }
                        <br></br>
                         </div>
        )) }
                </div>
            </div>

    </Wrapper>
  )
}

export default HeroSection