import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const HeroSection = () => {
    const [details , setDetails] = useState([]);
    const [details2 , setDetails2] = useState([]);
         const [homeGS , setHomeGS] = useState([]);


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
.GoalContainer {
    display: grid;
    grid-template-columns: 1fr 75px 1fr;
    gap: 60px;
    padding: 0px 15px 24px;
}
.GoalContainer ul:first-of-type {
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.GoalContainer ul {
    display: flex;
    flex-wrap: wrap;
}
.GoalContainer li {
    margin-right: 5px;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.16px;
    list-style: none;
}
.css-16vghmb-GoalContainer {
    position: absolute;
    top: 36%;
    left: 0px;
    transform: translateX(-22%) rotate(-90deg);
}
.css-7g2v2r-LineupMapContainer {
    display: flex;
    position: relative;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    height: 550px;
    background-image: url(https://media.istockphoto.com/id/472347896/photo/striped-soccer-field.jpg?s=612x612&w=0&k=20&c=wgeavCCOimF1b5mrv9QNQuuJqs1ERX67pDjPT3yv8j8=);
}
.css-c039tb-MiddleOfField {
    position: absolute;
    left: 50%;
    height: 100%;
    width: 6px;
    background-color: black;
}
.css-c039tb-MiddleOfField::after {
    content: " ";
    width: 150px;
    height: 150px;
    border: solid 6px black;
    position: absolute;
    border-radius: 50%;
    top: calc(50% - 81px);
    left: -78px;
}
.css-6tdo4x-GoalContainer {
    position: absolute;
    top: 36%;
    right: 0px;
    transform: rotate(90deg) translateY(-39%);
}
.TeamContainer {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    width: 50%;
}
.RowContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    min-width: 80px;
}
.LineupPlayerContainer {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    font-size: 15px;
    padding-top: 12px;
}
.PlayerHeadContainer {
    position: relative;
}
.PlayerIconCSS {
    display: flex;
    position: relative;
    box-sizing: content-box;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    align-items: end;
    background-color: var(--MFFullscreenColorScheme-playerIconBackground);
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
.PlayerIconCSS * {
    border-radius: 50%;
}
.css-vpdota-LineupSubContainer {
    position: absolute;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    top: -24px;
    left: -6px;
}
.css-n6vdaq-LineupPlayerRatingContainer {
    position: absolute;
    left: 27px;
    top: -8px;
}
.css-1mnesu9-PlayerRatingStyled {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 2px;
    min-width: 32px;
    min-height: 21px;
    width: auto;
    height: auto;
    border-radius: 10px;
    padding: 2px 6px;
    background-color: rgb(240, 128, 34);
}
.css-1mnesu9-PlayerRatingStyled span {
    white-space: nowrap;
    letter-spacing: 0px;
    font-family: GTWalsheim-Md;
    font-size: 13px;
    color: white;
}
.css-12i3ooo-MiddleLineupBadgesContainer {
    position: absolute;
    bottom: 31px;
}
.css-7z666k-LineupMissedPenaltyBadgeContainer {
    position: absolute;
    left: 33px;
    display: flex;
    flex-direction: row;
}
span{
    color: white !important;
    font-weight: 500;
    font-size: 16px;
}
.css-1pb0mb5-LineupPlayerText {
    margin-top: 10px;
    color: var(--GlobalColorScheme-DefaultColor-white);
    text-align: center;
}
.css-1y4ddg1-Shirt {
    color: var(--GlobalColorScheme-DefaultColor-lightgreen);
    margin-right: 10px;
}
    `
      useEffect(() => {
        getCat();
       
       
    
        }, [])
        
//   useEffect(() => {
//     const interval = setInterval(() => {
//       getCat2();
//     }, 2000);

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
            setHomeGS(Object.keys(data?.header?.events?.homeTeamGoals))
            console.log(1)
            setDates(data.date)
           
            // const myObject = details?.header?.events?.homeTeamGoals || {
            //     a: 'somestring',
            //     b: 42,
            //     c: false
            //   };
            //               var keyNames = Object.keys(myObject);
            //                   console.log(keyNames)
            //                   setHomeGS(keyNames)
           
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
                    <div className="GoalContainer">
                                    <ul>
                                        
                                     
                                       {homeGS?.map(name => (   <li key={name}>   <span   style={{ marginRight: '5px' }}> {name} </span> 
                                       {/* <span>  {details?.header?.events?.homeTeamGoals?.name ?.map(time => time.timeStr)}</span> */}
                                        <span>,</span>    </li>))}
                                        
                                     
                                        

                                    </ul>
                                </div>



                                
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
            
           <section className="css-7g2v2r-LineupMapContainer ">
           <div className="css-16vghmb-GoalContainer eu5dgts1"><svg xmlns="http://www.w3.org/2000/svg" id="lineup_1_214x118" width="276" height="154" viewBox="0 0 316 174"><g id="Group_4486" fill="var(--MFFullscreenColorScheme-pitchLines)" data-name="Group 4486" transform="translate(84.168)"><path id="Path_2174" d="M57 0h5.907v50.136a5.92 5.92 0 0 0 5.907 5.9H192.85a5.92 5.92 0 0 0 5.907-5.9V0h5.907v50.136a11.84 11.84 0 0 1-11.813 11.8H68.813A11.84 11.84 0 0 1 57 50.136z" className="cls-1" data-name="Path 2174" transform="translate(-57)"></path></g><path id="Path_2175" fill="var(--MFFullscreenColorScheme-pitchLines)" d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z" className="cls-1" data-name="Path 2175"></path></svg></div>
           <div className="css-c039tb-MiddleOfField eu5dgts2"></div>
           <div className="css-6tdo4x-GoalContainer eu5dgts1"><svg xmlns="http://www.w3.org/2000/svg" id="lineup_1_214x118" width="276" height="154" viewBox="0 0 316 174"><g id="Group_4486" fill="var(--MFFullscreenColorScheme-pitchLines)" data-name="Group 4486" transform="translate(84.168)"><path id="Path_2174" d="M57 0h5.907v50.136a5.92 5.92 0 0 0 5.907 5.9H192.85a5.92 5.92 0 0 0 5.907-5.9V0h5.907v50.136a11.84 11.84 0 0 1-11.813 11.8H68.813A11.84 11.84 0 0 1 57 50.136z" className="cls-1" data-name="Path 2174" transform="translate(-57)"></path></g><path id="Path_2175" fill="var(--MFFullscreenColorScheme-pitchLines)" d="M11.813 150.407h90.813a76.778 76.778 0 0 0 110.748 0h90.813A11.839 11.839 0 0 0 316 138.61V0h-5.906v138.61a5.92 5.92 0 0 1-5.907 5.9H11.813a5.92 5.92 0 0 1-5.907-5.9V0H0v138.61a11.84 11.84 0 0 0 11.813 11.797zm193 0a70.761 70.761 0 0 1-93.619 0z" className="cls-1" data-name="Path 2175"></path></svg></div>
            <div className="TeamContainer">
                

          
            <div className="RowContainer">
           {details?.content?.lineup?.lineup[0]?.players[0]?.map(name => {
                    return      <div className="LineupPlayerContainer">
                    <div className="PlayerHeadContainer">
                        <div className="PlayerIconCSS">
                        <img src={`${name?.imageUrl}`} className="Image PlayerImage" alt="" width="40" height="40" loading="lazy" />
                        </div>
                        <div className="css-vpdota-LineupSubContainer e1eitw0d13"></div>
                        <div className="css-n6vdaq-LineupPlayerRatingContainer e1eitw0d9"><div className="css-1mnesu9-PlayerRatingStyled e1sodkt20">
                            <span>${name?.rating?.num}</span></div></div>
                        </div>
                        <div className="css-12i3ooo-MiddleLineupBadgesContainer e1eitw0d2"><div className="css-7z666k-LineupMissedPenaltyBadgeContainer e1eitw0d7"></div></div>
                        <span className="css-1pb0mb5-LineupPlayerText eo59uzm0"><span className="css-1y4ddg1-Shirt elhbny55">
                            5</span>Caldirola</span>
                     </div>
                })}
           
             

           </div>
          {/* <div className="RowContainer">
           {details?.content?.lineup?.lineup[0]?.players[1]?.map(name => {
                    return      <div className="LineupPlayerContainer">
                    <div className="PlayerHeadContainer">
                        <div className="PlayerIconCSS">
                        <img src={`${name?.imageUrl}`} className="Image PlayerImage" alt="" width="40" height="40" loading="lazy" />
                        </div>
                        <div className="css-vpdota-LineupSubContainer e1eitw0d13"></div>
                        <div className="css-n6vdaq-LineupPlayerRatingContainer e1eitw0d9"><div className="css-1mnesu9-PlayerRatingStyled e1sodkt20">
                            <span>${name?.rating?.num}</span></div></div>
                        </div>
                        <div className="css-12i3ooo-MiddleLineupBadgesContainer e1eitw0d2"><div className="css-7z666k-LineupMissedPenaltyBadgeContainer e1eitw0d7"></div></div>
                        <span className="css-1pb0mb5-LineupPlayerText eo59uzm0"><span className="css-1y4ddg1-Shirt elhbny55">
                            5</span>Caldirola</span>
                     </div>
                })}
           
             

           </div>
           <div className="RowContainer">
           {details?.content?.lineup?.lineup[0]?.players[2]?.map(name => {
                    return      <div className="LineupPlayerContainer">
                    <div className="PlayerHeadContainer">
                        <div className="PlayerIconCSS">
                        <img src={`${name?.imageUrl}`} className="Image PlayerImage" alt="" width="40" height="40" loading="lazy" />
                        </div>
                        <div className="css-vpdota-LineupSubContainer e1eitw0d13"></div>
                        <div className="css-n6vdaq-LineupPlayerRatingContainer e1eitw0d9"><div className="css-1mnesu9-PlayerRatingStyled e1sodkt20">
                            <span>${name?.rating?.num}</span></div></div>
                        </div>
                        <div className="css-12i3ooo-MiddleLineupBadgesContainer e1eitw0d2"><div className="css-7z666k-LineupMissedPenaltyBadgeContainer e1eitw0d7"></div></div>
                        <span className="css-1pb0mb5-LineupPlayerText eo59uzm0"><span className="css-1y4ddg1-Shirt elhbny55">
                            5</span>Caldirola</span>
                     </div>
                })}
           
             

           </div>
           <div className="RowContainer">
           {details?.content?.lineup?.lineup[0]?.players[3]?.map(name => {
                    return      <div className="LineupPlayerContainer">
                    <div className="PlayerHeadContainer">
                        <div className="PlayerIconCSS">
                        <img src={`${name?.imageUrl}`} className="Image PlayerImage" alt="" width="40" height="40" loading="lazy" />
                        </div>
                        <div className="css-vpdota-LineupSubContainer e1eitw0d13"></div>
                        <div className="css-n6vdaq-LineupPlayerRatingContainer e1eitw0d9"><div className="css-1mnesu9-PlayerRatingStyled e1sodkt20">
                            <span>${name?.rating?.num}</span></div></div>
                        </div>
                        <div className="css-12i3ooo-MiddleLineupBadgesContainer e1eitw0d2"><div className="css-7z666k-LineupMissedPenaltyBadgeContainer e1eitw0d7"></div></div>
                        <span className="css-1pb0mb5-LineupPlayerText eo59uzm0"><span className="css-1y4ddg1-Shirt elhbny55">
                            5</span>Caldirola</span>
                     </div>
                })}
           
             

           </div>
           <div className="RowContainer">
           {details?.content?.lineup?.lineup[0]?.players[4]?.map(name => {
                    return      <div key={name?.name} className="LineupPlayerContainer">
                    <div className="PlayerHeadContainer">
                        <div className="PlayerIconCSS">
                        <img src={`${name?.imageUrl}`} className="Image PlayerImage" alt="" width="40" height="40" loading="lazy" />
                        </div>
                        <div className="css-vpdota-LineupSubContainer e1eitw0d13"></div>
                        <div className="css-n6vdaq-LineupPlayerRatingContainer e1eitw0d9"><div className="css-1mnesu9-PlayerRatingStyled e1sodkt20">
                            <span>${name?.rating?.num}</span></div></div>
                        </div>
                        <div className="css-12i3ooo-MiddleLineupBadgesContainer e1eitw0d2"><div className="css-7z666k-LineupMissedPenaltyBadgeContainer e1eitw0d7"></div></div>
                        <span className="css-1pb0mb5-LineupPlayerText eo59uzm0"><span className="css-1y4ddg1-Shirt elhbny55">
                            5</span>{name?.name}</span>
                     </div>
                })}
           
             

           </div>*/}
          
            </div> 
           
           
           
           
           </section> 

    </Wrapper>
  )
}

export default HeroSection