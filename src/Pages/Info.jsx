import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const HeroSection = () => {
    const [details , setDetails] = useState([]);
    const [details2 , setDetails2] = useState([]);


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

    const Wrapper = styled.div`
    display: flex;
    -webkit-box-pack: center;
    /* justify-content: center; */
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    margin-top: 100px;
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
.box {
    position: relative;
}
.match-info{

}
.GridContainer {
    height: 70px;
    border-bottom: var(--GlobalColorScheme-Divider);
    display: flex;
    justify-content: center;
    grid-template-columns: 200px auto 200px;
    -webkit-box-align: center;
    align-items: center;
    background-color: #1D1D1D;
}
.HeaderLeagueCSS {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
}

.mt-25{
    margin-top: 25px;
}
.HeaderFullscreenSection {
    min-height: 100px;
    padding: 20px 0px 5px;
    background-color: #1D1D1D;
}
.HeaderFullscreenHeader {
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 200px 1fr;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.TeamMarkup {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.scores {
    display: grid;
    grid-auto-rows: 1fr 1fr 1fr;
    justify-content: space-evenly;
    place-items: center;
    -webkit-box-align: center;
}
.scorss {
    white-space: nowrap;
    font-size: 37px;
    font-family: GTWalsheim-Md;
    letter-spacing: 0.56px;
}
.timess {
    font-size: 18px;
    font-family: GTWalsheim-Md;
    letter-spacing: 0.27px;
}
.TeamMarkup2 {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
    `
      useEffect(() => {
        getCat();
        console.log(param)


    
        }, [])
        
//   useEffect(() => {
//     const interval = setInterval(() => {
//       getCat();
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

    const getCat = () =>{
        axios({
            method: 'get',
            url: `https://proxy.cors.sh/https://www.fotmob.com/api/matchDetails?matchId=${param}&timezone=Asia%2FDhaka&ccode3=BGD`,
            headers: {'Origin': `https://www.fotmob.com/api/matchDetails?matchId=${param}&timezone=Asia%2FDhaka&ccode3=BGD`,
            'x-cors-api-key': `${process.env.REACT_APP_KEY}`
        }
        }).then(data2 => { const data = data2.data
            console.log(data)
            setDetails(data)
            setDetails2(data.header?.events)

            setDates(data.date)
     

  })
        }

         
  return (
    <Wrapper >
            <div className='container'>
                <div className="match-info box">
                    <div className="GridContainer">
                <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${details?.general?.leagueId}.png`} width="22" height="22" loading="lazy" alt=""  />
                <div className="HeaderLeagueCSS">
                <h1 className='text-white mt-25 '>{details?.general?.leagueName} {details?.general?.leagueRoundName
}</h1>
                </div>

                    </div>
                    <section className="HeaderFullscreenSection">
                        <header className="HeaderFullscreenHeader">
                                <div className="TeamMarkup">
                                    <span  className='text-white'  style={{ fontSize: '24px' }}>{details?.general?.homeTeam?.name}</span>
             
                                    <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${details?.general?.homeTeam?.id}_small.png`} alt="" width="50" height="50"  style={{ marginLeft: '20px' }} loading="lazy" />
                                </div>
                                <div className="scores">
                                    <span className='scorss text-white'> {details?.header?.status?.scoreStr}</span>
                                    <span className="timess">
                                    {details?.header?.status?.reason?.long}
                                    </span>
                                </div>
                                <div className="TeamMarkup2">
                                <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${details?.general?.awayTeam?.id}_small.png`} alt="" width="50" height="50"  style={{ marginRight: '20px' }} loading="lazy" />
                                <span className='text-white'  style={{ fontSize: '24px' }}>{details?.general?.awayTeam?.name}</span>
                                </div>
                        </header>
                    </section>
                </div>
            <Tabs
      defaultActiveKey="1"
      id="justify-tab-example"
      
      justify
    >
      
      {details?.nav?.map((test, index) => (
        <Tab key={index+1} eventKey={index+1} title={test}>ok </Tab>
       ))}
     
    
   
    </Tabs>
                  
                    
            </div>
            
           

    </Wrapper>
  )
}

export default HeroSection