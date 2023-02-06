import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import { Link } from 'react-router-dom';


const HeroSection = () => {
    const [details , setDetails] = useState([]);

    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length === 1) && (d = '0' + d);
    (m.length === 1) && (m = '0' + m);
    var yyyymmdd = `${y}-${m}-${d}`;
    var yyyymmdd2 = y + m + d;
    const [dates , setDates] = useState(yyyymmdd);

    

    const Wrapper = styled.section`
   
   
    
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
    `
      useEffect(() => {
        getCat();

      
       
    
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
            url: `https://proxy.cors.sh/https://www.goal.com/api/live-scores/refresh?edition=en-in&date=${yyyymmdd}&tzoffset=360`,
            headers: {'Origin': `https://www.goal.com/api/live-scores/refresh?edition=en-in&date=${yyyymmdd}&tzoffset=360`,
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
            {/* <div>
                <h1> Today  </h1>
            </div> */}
            <div> 
                <br /> <br /><br />
                <h4  onClick={getCat3}>   Previous day   </h4>    <h1 className='big-heading' onClick={getCat}> Today {details.date}            </h1> 
                <h4  onClick={getCat2}>  Next day  </h4> 

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
                { details?.livescores?.map(team => (
                    <div key={team?.id}> 
                    <div className="GroupHeaderContainer">
                       
                        
                            <img src={team?.competition?.badge?.url} alt=""  width="20" height="20" loading="lazy" />
                            <p className="GroupTitleLink">{team?.competition?.name}</p>
                       
                    </div>
                    
                    {team?.matches?.map(match => {
                        return <div className="MatchWrapper">
                        <span className="TeamName">{match?.teamA?.name}</span>
                        <img src={match?.teamA?.crest?.url} class="Image TeamIcon " alt="" width="25" height="25" loading="lazy"></img>
                            <div className="StatusLSMatchWrapper">
                            <span className="score">
                            {match?.score?.teamA}-{match?.score?.teamB}
                            </span>
                            <span className="status">
                            {match?.period?.minute}
                            </span>
                            </div>
                    </div>
                    })}
                    
                    
                    
                   
                      
                        
                         </div>
        ))  }
                </div>
            </div>

    </Wrapper>
  )
}

export default HeroSection