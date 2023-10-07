import React from 'react'
import carditem1 from '../assets/images/carditem1.png'
import carditem2 from '../assets/images/carditem2.png'
import carditem3 from '../assets/images/carditem3.png'

const ServicesPage = () => {
  return (
    <div className="container-fluid text-center">

<h1 style={{fontFamily:'Arial', fontWeight:'bold', fontSize:'30px', textAlign:'center', paddingTop:'50px', marginBottom:'-10px'}}><b>Our Services</b></h1>
<p style ={{textAlign:'center', fontFamily:'Arial', paddingTop:'30px'}}>There are many variations of passages of Lorem Ipsum available, but the majority have</p>

<div className="container d-inline-flex justify-content-around">
<div className="card align-items-center pt-3" style={{width:'18rem'}}>
  <img src={carditem1} className="card-img-top" alt="..." style={{height:'50px', width:'50px'}}/>
  <div className="card-body">
    <h4 style={{color:'orangered'}}>Orange</h4>
    <p className="card-text  text-center">There are many variations of passages of Lorem Ipsum,
        but the majority have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable.</p>
  </div>
</div>

<div className="card align-items-center pt-3" style={{width:'18rem'}}>
  <img src={carditem2} className="card-img-top" alt="..." style={{height:'50px', width:'50px'}}/>
  <div className="card-body">
    <h4 style={{color:'orangered'}}>Grapes</h4>
    <p className="card-text  text-center">There are many variations of passages of Lorem Ipsum,
        but the majority have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable.</p>
  </div>
</div>

<div className="card align-items-center pt-3" style={{width:'18rem'}}>
  <img src={carditem3} className="card-img-top" alt="..." style={{height:'50px', width:'50px'}}/>
  <div className="card-body">
    <h4 style={{color:'orangered'}}>Guava</h4>
    <p className="card-text text-center">There are many variations of passages of Lorem Ipsum,
        but the majority have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable.</p>
  </div>
</div>
</div>
<div ClassName="row">
<button style={{fontSize:'18px',
      fontWeight:'bold',
      color:'white',
      backgroundColor:'black',
      border:'0px',
      padding:'9px 14px',
      margin:'30px'}}>Read More</button>
</div>

    </div>
  )
}

export default ServicesPage