import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';

function OffcanvasExample() {
      var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
                        if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

const Wrapper = styled.div`


.navbar {transition: top 0.3s;}
.headerX{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: var(--nav-height) !important;
    background-color: rgba(10, 25, 47, 0.85);
    backdrop-filter: blur(10px);
    transition: var(--transition);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
}
.header-items{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.order-list{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
}

li{
    margin-right: 5px;
    color: var(--green);
    font-size: var(--fz-md);
    text-align: right;

}
li span{
    margin: 0px 5px;
    position: relative;
 
    font-size: var(--fz-md);
    color: var(--slate)

}

a{
    padding: 10px ;
    
}


a span:hover, a span:focus {
    color: var(--green) !important;
}
 .resume-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-left: 15px;
    font-size: var(--fz-md);
}
.resume-button:hover, .resume-button:focus, .buZqzj .resume-button:active {
    background-color: var(--green-tint);
    outline: none;
}
.logo{
    font-family: Lobster Two,cursive;
    font-style: italic;
    text-decoration: none !important;
    font-size: var(--fz-heading);
    color: var(--green);
}
@media (max-width: 1080px){

.headerX {
    padding: 0px 40px;
  }
}
@media (max-width: 768px){
  .headerX {
    padding: 0px 25px;
}


 .header-items {
       display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    text-align: center;
}
.order-list{
  flex-direction: column;
}
.order-list   span {
    position: relative;
    margin: 0px auto 20px;
    counter-increment: item 1;
    font-size: clamp(var(--fz-sm),4vw,var(--fz-lg)) !important;
}
.resume-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 18px 50px;
    margin: 10% auto 0px;
    width: max-content;
    margin-top: 80px !important;
}
.btn-close{
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  color: var(--green) !important;
}

}

`


  return (
    <>
      <Wrapper>
        <Navbar key='md' id="navbar"  fixed='top'  expand={'md'} className="mb-3 headerX">
          <Container fluid>
            <Navbar.Brand href="#" className='logo'>Pewds</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
            <Navbar.Offcanvas
            className='offcan'
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <div className="header-items">
                        <ol className='order-list'>
                    <a href="#about">    <li>  <span>About</span></li></a>
                    <a href="#about">    <li>  <span>Experience</span></li></a>
                    <a href="#about">    <li>  <span>Projects</span></li></a>
                    <a href="#about">    <li>  <span>Contact</span></li></a>
                        
                        </ol>
                        <div className="button"  style={{ transitionDelay: '4000' }}>
                            <a href="#download" className='resume-button'>Resume</a>
                        </div>

                    </div>


                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </Wrapper>
    </>
  );
}

export default OffcanvasExample;