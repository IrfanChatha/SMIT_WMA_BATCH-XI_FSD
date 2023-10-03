import React, { Fragment } from 'react';
import carditem1 from '../assets/images/carditem1.png';
import carditem2 from '../assets/images/carditem2.png';

const LandingPage = () => {
  return (
<Fragment>

<h1 style={{fontFamily:'Arial', fontWeight:'bold', fontSize:'30px', textAlign:'center', paddingTop:'350px', marginBottom:'-10px'}}>Our Services</h1>
<p style ={{textAlign:'center', fontFamily:'Arial'}}>There are many variations of passages of Lorem Ipsum available, but the majority have</p>


<div id="main_div">
    <div class="items" id="childiv">
    <img src={carditem1} alt="Card 1" style={{height:'50px', width:'50px'}}/>
    <h3 style={{fontFamily:'Courier', fontWeight:'bolder'}}>Orange</h3>
    <p style={{fontFamily:'Courier'}}>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </div>

    <div class="items" id="childiv">
    <img src={carditem2} alt="Card 2" style={{height:'50px', width:'50px'}}/>
    <h3 style={{fontFamily:'Courier', fontWeight:'bolder'}}>Grapes</h3>
    <p style={{fontFamily:'Courier'}}>There are many variations of passages of Lorem Ipsum,
        but the majority have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable.</p>
    </div>

 {/* { <div class="items" id="childiv">
    <img src="assests/card-item-3.png" height=50px; width=50px>
    <h3 style=" font-family:Courier; font-weight: bolder">Guava</h3>
    <p style="font-family:Courier">There are many variations of passages of Lorem Ipsum,
        but the majority have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable.</p>
    </div>
</div>

<div id="maindiv2">
<a href="menu.html"><button id = contactusbt>Read More</button></a> <br>
<h2 style=" font-family:Arial; font-weight: bolder">Fresh Fruits</h2>
    <p style="font-family:Arial">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
</div>



 <div id="ctrparent">

        <div id="ctrchild1">
            <h2 style=" font-family:Arial; font-weight: bolder">Best Fresh Orange</h2>
            <p style="font-family:Arial">but the majority have suffered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are going to use passage of Lorem Ipsum, you need to be</p>
            <a href="menu.html"><button id = contactusbt>Buy Now</button></a> <br>
        </div>

        <div id="ctrchild11">
            <img src="assests/orange.png" height=80px; width=150px>
        </div>

        <div id="ctrchild2">
           <h2 style=" font-family:Arial; font-weight: bolder">Best Fresh Grapes</h2>
            <p style="font-family:Arial">but the majority have suffered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are going to use passage of Lorem Ipsum, you need to be</p>
            <a href="menu.html"><button id = contactusbt>Buy Now</button></a> <br>
        </div>

        <div id="ctrchild22">
            <img src="assests/grapes.png" height=150px; width=80px>
        </div>

        <div id="ctrchild3">
            <h2 style=" font-family:Arial; font-weight: bolder">Best Fresh Guava</h2>
            <p style="font-family:Arial">but the majority have suffered alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable. If you are going to use passage of Lorem Ipsum, you need to be</p>
            <a href="menu.html"><button id = contactusbt>Buy Now</button></a> <br>
        </div>

        <div id="ctrchild33">
            <img src="assests/gauva.png" height=120px; width=110px>
        </div>

    </div>

<br><br><br>

<h1 style="text-align:center; font-family: Arial">Testimonial</h1>
<p style="font-family:Arial; text-align: center">There are many variations of passages of Lorem Ipsum available, but the majority have</p>

<div style="text-align: center">
<img src="assests/client.png" height=280px; width=300px>
<h2 style="text-align:center; font-family: Arial">Johnhex</h2>
<p style="font-family:Courier">There are many variations of passages of Lorem Ipsum,
    but the majority have suffered alteration in some form,<br> by injected humour, or randomised
    words which don't look even<br> slightly believable.</p>
</div>

<div id="ctrparent">
<br><br><br>
        <div id="ctrchild1">
            <h1 style="font-family:Arial; font-weight:bolder">Contact Us</h1>

<form>
<input id="inputbox" type="text" placeholder="Name" size="80"><br><br>
<input id="inputbox" type="text" placeholder="Phone Number" size="80"><br><br>
<input id="inputbox" type="email" placeholder="Email" size="80"><br><br><br><br><br><br>
<input id="inputbox" type="text" placeholder="Message" size="80"><br><br>
</form>
    <a href="menu.html"><button id = shopnowbt>Send</button></a> <br>
        </div>

    <div id="ctrchild11">
            <img src="assests/orange-dish.png" height=350px; width=200px>
    </div>*/
</div> 


</Fragment>
)
}

export default LandingPage;