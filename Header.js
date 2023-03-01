import React, {useState} from 'react';
import {Button, Navbar , Nav , Card} from 'react-bootstrap';
import HeaderCart from './HeaderCart';
// import Card from 'react-bootstrap/Card';

const Header = props => {
    const [homeView,setHomeView] = useState(false);
    const [storeView,setStoreView] = useState(false);
    const [aboutView,setAboutView] = useState(false);

    const homeHandler = () => {
        if(storeView){
            setStoreView(false);
        }
        if(aboutView) {
            setAboutView(false);
        }
        setHomeView(true);
    };
    const storeHandler = () => {
        if(homeView){
            setHomeView(false);
        }
        if(aboutView) {
            setAboutView(false);
        }
        setStoreView(true);
    };
    const aboutHandler = () => {
        if(storeView){
            setStoreView(false);
        }
        if(homeView) {
            setHomeView(false);
        }
        setAboutView(true);
    };

    return <React.Fragment>
        <Card bg='dark' fixed="top" className='me-auto' style={{ height:"50px" }} >
            <Nav className="me-auto justify-content-center" style={{ width: "100%" }} >
            <Nav.Item className='justify-content-center'>
                <Button variant="dark" onClick={homeHandler}>Home</Button>
            </Nav.Item>
            <Nav.Item className='justify-content-center'>
                <Button variant="dark" onClick={storeHandler}>Store</Button>
            </Nav.Item>
            <Nav className='justify-content-end'>
               <Nav.Item> <Button variant="dark" onClick={aboutHandler}>About</Button> </Nav.Item>
            </Nav>
            <Nav.Item className='justify-content-end'>
            {storeView && <HeaderCart />}
            </Nav.Item>
            
           
            
            
              
            </Nav>
         </Card>
       
         <Card bg='light' variant="dark" className="justify-content-center">
            <Card.Text className='justify-content-center' style={{backgroundColor:"GrayText" , color:"White",textSizeAdjust:"100%",textAlign:'center',height:"140px"}}> The Generics</Card.Text>
        </Card>       
        
    </React.Fragment>
};

export default Header;