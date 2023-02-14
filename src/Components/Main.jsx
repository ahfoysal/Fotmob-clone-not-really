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
    var yyyymmdd = y + m + d;
    const [dates , setDates] = useState(yyyymmdd);

    

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
            {/* <div>
                <h1> Today  </h1>
            </div> */}
            <div> 
                <br /> <br /><br />
                <h4  onClick={getCat3}>   Previous day   </h4>    <h1 className='big-heading' onClick={getCat}> Today {details.date}            </h1> 
                <h4  onClick={getCat2}>  Next day  </h4> 

            </div>
            
            
            <div>
                <div>
                { details.leagues?.map(team => (
                    <div key={team?.id}> 
                    
                    
                    <div className="GroupHeaderContainer">
                       
                        
                        
                            <img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${team?.parentLeagueId && team?.parentLeagueId || team?.id}.png`} alt="https://pngimg.com/uploads/football/small/football_PNG52792.png"   width="20" height="20" loading="lazy" />
                            <p className="GroupTitleLink">{team?.name}</p>
                       
                    </div>
                    
                
                         { team?.matches?.map(test => (
                            
                        <div key={test.id}> <Link to={`/match/${test.id}`}><p> {test.home.name} {test.home.score} -  {test.away.score}{test.away.name}
                        ({test.status?.finished === true &&  <span>FT</span>}
                        <span>{test.status?.liveTime?.long}</span>)
                        </p>
                        </Link>

                        
                         </div>
        )) }
                        <br></br>
                         </div>
        ))  }
                </div>
            </div>

    </Wrapper>
  )
}

export default HeroSection