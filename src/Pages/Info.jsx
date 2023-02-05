import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';


const HeroSection = () => {
    const [details , setDetails] = useState([]);

    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length === 1) && (d = '0' + d);
    (m.length === 1) && (m = '0' + m);
    var yyyymmdd = y + m + d;
    const [dates , setDates] = useState(yyyymmdd);

    let params = useParams();
    const param = params.name

    const Wrapper = styled.section`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    margin-top: 30px;
    padding: 0px;
    p{
        display: inline;
    }
     h1 {
    margin: 0px 0px 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm),vw,var(--fz-md));
    font-weight: 400;
}
.big-heading {
    margin: 0px;
    font-size: clamp(20px, 8vw, 40px);
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
        console.log(param)


    
        }, [])
        
  useEffect(() => {
    const interval = setInterval(() => {
      getCat();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

    const getCat = () =>{
        axios({
            method: 'get',
            url: `https://proxy.cors.sh/https://www.fotmob.com/api/matchDetails?matchId=${param}&timezone=Asia%2FDhaka&ccode3=BGD`,
            headers: {'Origin': `https://www.fotmob.com/api/matchDetails?matchId=${param}&timezone=Asia%2FDhaka&ccode3=BGD`,
            'x-cors-api-key': `temp_daeedd8e97154a6570229c1dc57ee197`
        }
        }).then(data2 => { const data = data2.data
            console.log(data)
            setDetails(data)
            setDates(data.date)
     

  })
        }

         
  return (
    <Wrapper >
            <div>
                <h1> {details?.general?.matchName} </h1>
            </div>
            
           

    </Wrapper>
  )
}

export default HeroSection