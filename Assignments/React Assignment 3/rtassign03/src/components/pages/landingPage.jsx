import React, { Fragment } from 'react';
import slideimage from '../assets/images/slideimage.png';

const LandingPage = () => {
  return (
<Fragment>

<div className="container-fluid">
   <div className="row">
    <div className="col-8 bg-body-tertiary" style={{width:'50%', backgroundColor: 'rgb(243, 233, 233)', paddingLeft:'20px'}}>
    <h1 className="mt-6" style={{paddingTop:'10%', fontFamily:'Arial', fontWeight:'bold', fontSize:'5vh'}}>Welcome to <br/> Our Fruits Shop</h1>
    <p style={{fontFamily:'Arial', fontSize:'20px'}}>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    <button style={{fontSize:'18px',
    fontWeight: 'bold',
    color:'white',
    backgroundColor:'orangered',
    border:'0px',
    padding:'9px 14px'}}>SHOP NOW</button>
    <button style={{fontSize:'18px',
      fontWeight:'bold',
      color:'white',
      backgroundColor:'black',
      border:'0px',
      padding:'9px 14px',
      marginLeft:'10px'}}>CONTACT US</button>
        
        </div>
    
    <div className="col-6 bg-body-tertiary" style={{width:'50%', backgroundColor: 'rgb(243, 233, 233)', paddingLeft:'20px'}}>
    <img src={slideimage} alt='SlideImage' className="img-fluid"/>
    </div>
  </div>
</div>






<h1 style={{fontFamily:'Arial', fontWeight:'bold', fontSize:'30px', textAlign:'center', paddingTop:'350px', marginBottom:'-10px'}}>Our Services</h1>
<p style ={{textAlign:'center', fontFamily:'Arial'}}>There are many variations of passages of Lorem Ipsum available, but the majority have</p>

</Fragment>
)}
export default LandingPage;