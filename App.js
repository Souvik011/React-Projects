import './App.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import Header from './components/Layout/Header';
import Product from './components/Product/Product';

const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ];
  
  
function App() {
  return (<React.Fragment>
    
    <div className='container'>
      <div>
        <Header />
        <div className='col-1 col-md-4' >
          
          {productsArr.map((item,index) => <Product key={index} album={item.album} title={item.title} price={item.price} imageUrl={item.imageUrl}/>)}
        </div>
      </div>
    </div>
  </React.Fragment>
  );
}

export default App;
