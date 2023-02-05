import React from 'react'
import styled from 'styled-components'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import data from '../Json/Experience.json'


const Experience = () => {
    const Wrapper = styled.section`
    padding-bottom: 0px;
        max-width: 700px;
        visibility: visible;
    opacity: 1;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;

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
    counter-increment: section 2;
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
.inner {
    min-height: 340px;
    display: flex;
}
.nav-item a{
    text-decoration: none !important;
    text-decoration-skip-ink: auto !important;
    position: relative !important;
    transition: var(--transition);
    display: flex !important;
    align-items: center !important;
    width: 100%;
    height: var(--tab-height);
    padding: 0px 20px 2px;
    border-left: 2px solid var(--lightest-navy);
    background-color: transparent;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-align: left;
    white-space: nowrap;
    border-radius: 0px !important;
}
.nav-item a:hover{
    background-color: var(--light-navy);

}
.nav-item a:focus{
    background-color: var(--light-navy);

}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: var(--bs-nav-pills-link-active-color);
    background-color: var(--light-navy);
    border-color: var(--green); 
}
.job-data{
  position: relative;
    width: 100%;
    margin-left: 20px;

}
.job-single {
    width: 100%;
    height: auto;
    padding: 0px 30px;
}
 h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xl);
    font-weight: 500;
    line-height: 1.3;
}
 span  {
    color: var(--green);
}
a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--green);
}
span > a::after {
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
 .duration {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
}
 ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    font-size: var(--fz-lg);
}
 ul li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
}
 ul li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
}
.tittles{
    flex-direction: column !important;
    
  }
  .tittles{
    position: relative;
    z-index: 3;
    width: max-content;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
@media (max-width: 1080px){


}
  @media (max-width: 768px){
  .tittles{
    flex-flow: row wrap !important;
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 30px;
    margin-left: -50px;
    margin-bottom: 0px;

  }
  .nav-item a{
   
    border-bottom: 2px solid var(--lightest-navy);
    border-left: none;
    
}
.job-data {
    margin-left: 0px;
}
.job-single {
   
    padding: 0px 0px;
}
}

    `
    
  return (
    <Wrapper>
        <h2 className='num-heading'> Where I’ve Worked</h2>
       
     <div className="inner">
     <Tab.Container id="left-tabs-example" defaultActiveKey="1">
      <Row>
        <Col sm={3} className='boxx '>
          <Nav variant="pills" className="d-flex tittles">
            {data.map((name, index) => {
                return  <Nav.Item key={index+1}>
                <Nav.Link eventKey={index+1}>{name.name}</Nav.Link>
              </Nav.Item>
            })}
           
           
          </Nav>
        </Col>
        <Col sm={9} >
        <Tab.Content className='job-data'>
          {data.map((name, index) => {
                return   <Tab.Pane eventKey={`${index+1}`} key={index+1} className='job-single'>  
                <h3>{name.position} <span> at <a href="##">{name.name}</a></span> </h3>
                <p className="duration">{name.duration}</p>
                <div>
                  <ul>
                  {name.info.map((name, index) =>{
                    return <li key={index+1}>{name}</li>
                  })}
                  </ul>

                </div>
               </Tab.Pane>
            })}
         
           
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
     </div>

        
    </Wrapper>
  )
}

export default Experience