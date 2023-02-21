import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


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

    

    const Wrapper = styled.section`
    /* display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    margin-top: 30px;
    padding: 0px; */
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
.GroupHeaderContainer {
    user-select: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 60px;
    padding-left: 20px;
    font-family: GTWalsheim-Md;
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: 0.27px;
    border-top: var(--GlobalColorScheme-Divider);
}
.MatchWrapper {
    position: relative;
    display: grid;
    -webkit-box-align: center;
    place-items: center;
    padding: 0px 5px;
    grid-template-columns: 1fr 25px 40px 25px 1fr;
    grid-template-rows: auto;
    column-gap: 15px;
    background: var(--GlobalColorScheme-Background-card);
    font-family: GTWalsheim-Rg;
    user-select: none;
    height: 70px;
    border-top: var(--GlobalColorScheme-Divider);
}
.GroupTitleLink {
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 20px;
    font-family: GTWalsheim-Md;
    line-height: 1.11;
    letter-spacing: 0.27px;
    font-size: 18px;
    margin-top: 15px ;  
    
}

.GroupTitleLink a {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: var(--GlobalColorScheme-Text-textDefault);
    outline: none;
   
    border: 0;
    background: 0;
    cursor: pointer;
    padding: 0;
}
.MatchWrapper {
    position: relative;
    display: grid;
    -webkit-box-align: center;
    place-items: center;
    padding: 0px 5px;
    grid-template-columns: 1fr 25px 40px 25px 1fr;
    grid-template-rows: auto;
    column-gap: 15px;
    background: var(--GlobalColorScheme-Background-card);
    font-family: GTWalsheim-Rg;
    user-select: none;
    height: 70px;
    border-top: var(--GlobalColorScheme-Divider);
}
.MatchWrapper > span {
    width: 100%;
    text-align: right;
}
.TeamName {
    font-size: 16px;
    line-height: 1.13;
    letter-spacing: 0.24px;
    overflow: auto hidden;
}.MatchWrapper > * {
    grid-row: 1 / 1;
}
.StatusLSMatchWrapper {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    row-gap: 5px;
    justify-items: center;
}
.score {
    font-family: GTWalsheim-Md;
    font-size: 16px;
    white-space: nowrap;
}
.status {
    font-size: 12px;
    color: var(--GlobalColorScheme-Text-secondaryText2);
}
.CardCSS     {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
}
.LeaguesBlockContainer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex-flow: column;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    width: calc(100% - 20px);
    height: 100%;
}
.LivescoreHeaderCSS {
    border-bottom: var(--GlobalColorScheme-Divider);
    width: 100%;
    height: 80px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px;
}
.DatepickerCSS {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.DatepickerMobileButton {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.DatepickerButtonCSS-applyMediumHover {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 13px;
    color: var(--GlobalColorScheme-IconColor);
    font-family: "GTWalsheim-Md";
    font-size: 21px;
    height: 60px;
}
.LeaguesListWrapperCSS {
    height: calc(100% - 60px);
    width: 100%;
    -webkit-animation: animation-1vfn007 ease 0s normal forwards 1;
    animation: animation-1vfn007 ease 0s normal forwards 1;
    -webkit-animation-duration: ms;
    animation-duration: ms;
}
.LeaguesListItselfCSS {
    height: calc(100% - 60px);
    width: 100%;
}
.GroupHeaderContainer-applyMediumHover {
    user-select: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 60px;
    padding-left: 20px;
    font-family: GTWalsheim-Md;
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: 0.27px;
    border-top: var(--GlobalColorScheme-Divider);
}
.GroupTitleLink {
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 20px;
    font-family: GTWalsheim-Md;
    line-height: 1.11;
    letter-spacing: 0.27px;
    font-size: 18px;
}
.MatchWrapper1 {
    position: relative;
    display: grid;
    -webkit-box-align: center;
    place-items: center;
    padding: 0px 5px;
    grid-template-columns: 1fr 25px 40px 25px 1fr;
    grid-template-rows: auto;
    column-gap: 15px;
    background: var(--GlobalColorScheme-Background-card);
    font-family: GTWalsheim-Rg;
    user-select: none;
    height: 70px;
    border-top: var(--GlobalColorScheme-Divider);
}
.MatchWrapper > span {
    width: 100%;
    text-align: right;
}
.TeamName {
    font-size: 16px;
    line-height: 1.13;
    letter-spacing: 0.24px;
    overflow: auto hidden;
}
.MatchWrapper > * {
    grid-row: 1 / 1;
}
.StatusLSMatchWrapperCSS {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    row-gap: 5px;
    justify-items: center;
}
.css-g3e0pm-score {
    font-family: GTWalsheim-Md;
    font-size: 16px;
    white-space: nowrap;
}
.MatchWrapper > * {
    grid-row: 1 / 1;
}
.css-oiyag6-status {
    font-size: 12px;
    color: var(--GlobalColorScheme-Text-secondaryText2);
}
.css-1cdc11f-GroupHeaderContainer-applyMediumHover {
    user-select: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 60px;
    padding-left: 20px;
    font-family: GTWalsheim-Md;
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: 0.27px;
    border-top: var(--GlobalColorScheme-Divider);
}
.MatchWrapper > span:nth-of-type(2) {
    grid-column: 5 / 5;
    text-align: left;
}
.MatchWrapper > span {
    width: 100%;
    text-align: right;
}
.MatchWrapper img:last-of-type {
    grid-column: 4 / 5;
}
    `
      useEffect(() => {
        getCat();

      
        axios({
            method: 'get',
            url: `https://proxy.cors.sh/https://www.goal.com/api/live-scores/refresh?edition=en-in&date=2023-02-06&tzoffset=360`,
            headers: {'Origin': `https://www.goal.com/api/live-scores/refresh?edition=en-in&date=2023-02-06&tzoffset=360`,
            'x-cors-api-key': `${process.env.REACT_APP_KEY}`}
        }).then(data2 => { const data = data2.data
            console.log(data)
           
     

  })
    
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
            url: `https://proxy.cors.sh/https://www.fotmob.com/api/matches?date=${yyyymmdd}&timezone=Asia%2FDhaka&ccode3=BGD`,
            headers: {'Origin': `https://www.fotmob.com/api/matches?date=${yyyymmdd}&timezone=Asia%2FDhaka&ccode3=BGD`,
            'x-cors-api-key': `${process.env.REACT_APP_KEY}`}
        }).then(data2 => { const data = data2.data
            console.log(data)
            setDetails(data)
            setDates(data.date)
     

  })

        
        }

          const getCat2 = () =>{
         
            
              axios({
                method: 'get',
                url: `https://proxy.cors.sh/https://www.fotmob.com/api/matches?date=${Number(dates)+1}&timezone=Asia%2FDhaka&ccode3=BGD`,
                headers: {'Origin': `https://www.fotmob.com/api/matches?date=${yyyymmdd}&timezone=Asia%2FDhaka&ccode3=BGD`,
                'x-cors-api-key': `${process.env.REACT_APP_KEY}`}
            }).then(data2 => { const data = data2.data
                console.log(data)
                setDetails(data)
                setDates(data.date)
         
    
      })
            
            }
              const getCat3 = () =>{
                axios({
                    method: 'get',
                    url: `https://proxy.cors.sh/https://www.fotmob.com/api/matches?date=${Number(dates)-1}&timezone=Asia%2FDhaka&ccode3=BGD`,
                    headers: {'Origin': `https://www.fotmob.com/api/matches?date=${yyyymmdd}&timezone=Asia%2FDhaka&ccode3=BGD`,
                    'x-cors-api-key': `${process.env.REACT_APP_KEY}`}
                }).then(data2 => { const data = data2.data
                    console.log(data)
                    setDetails(data)
                    setDates(data.date)
             
        
          })}
  return (
    <Wrapper >
    
        <br /><br /><br />
           <div className="CardCSS">
            <section className="LeaguesBlockContainer">
                <nav className="LivescoreHeaderCSS">
                <div className="DatepickerCSS">
                    <FaArrowLeft onClick={getCat3} />
                    <div className="DatepickerMobileButton">
        <span className="DatepickerButtonCSS-applyMediumHover"> {details.date === yyyymmdd && "Today"  || details.date} </span>
                    </div>
                    <FaArrowRight onClick={getCat2} />
                </div>
                </nav>
                <section className="LeaguesListWrapperCSS">
                    <div className="LeaguesListItselfCSS">
                    { details.leagues?.map(team => (  <div>
                            <div className="css-1cdc11f-GroupHeaderContainer-applyMediumHover">
                            <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${team?.parentLeagueId && team?.parentLeagueId || team?.id}.png`} alt="https://pngimg.com/uploads/football/small/football_PNG52792.png"   width="20" height="20" loading="lazy" />
                                <p className="GroupTitleLink">{team?.name}</p>
                            </div>
                            { team?.matches?.map(test => (
                            
                            <Link  className="MatchWrapper" to={`/match/${test.id}`}>
                            <span className="TeamName">  {test.home.name} </span>
                            <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${test.home.id}_small.png`} alt="" width="25" height="25"  style={{ marginLeft: '10px' }} loading="lazy" />
                           <div className="StatusLSMatchWrapperCSS">
                                    <span className="css-g3e0pm-score">
                                    {test.status?.started === true &&   <span>  {test.home.score} - {test.away.score} </span> }
                                    {test.status?.started === false &&  <span style={{ paddingLeft: '10px', marginRight: '10px'  }}> {new Date(test.status?.utcTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}  </span>}
                                    </span>
                                    <span className="css-oiyag6-status">
                                    {test.status?.finished === true &&  <span>FT</span>}
                      {test.status?.liveTime?.long &&  <span className='text-success'>{test.status?.liveTime?.long}'</span>}
                                    </span>
                           </div>
                           
                           <span className="TeamName">
                           {test.away.name}
                           </span>
                           <img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${test.away.id}_small.png`} alt="" width="25" height="25"  style={{ marginRight: '10px' }} loading="lazy" />

                            </Link>   
            )) }
                           
                        </div> ))}
                    </div>
                </section>
            </section>

           </div>
        
            
            
         

    </Wrapper>
  )
}

export default HeroSection