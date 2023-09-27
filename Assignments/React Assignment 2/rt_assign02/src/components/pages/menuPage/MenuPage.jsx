import React from 'react'
import burger from '../../../assets/images/burger.jpg'
import burger1 from '../../../assets/images/burger1.jpg'
import burger2 from '../../../assets/images/burger2.jpg'
import pizza from '../../../assets/images/pizza.jpg'
import pizaa1 from '../../../assets/images/pizaa1.jpg'
import pizza2 from '../../../assets/images/pizza2.jpg'
const MenuPage = () => {
  return (

<div style={{textAlign: 'center'}}>

<h2>{'Our Menu - Burgers and Pizzas'}</h2>

<h3>{'Burgers'}</h3>

<img src={burger} style={{width: '180px', height: '150px', paddingRight:'20px'}} alt="Umair's Cuisine"/>
<img src={burger1} style={{width: '180px', height: '150px', paddingRight:'20px'}} alt="Umair's Cuisine"/>
<img src={burger2} style={{width: '180px', height: '150px'}} alt="Umair's Cuisine"/>
<br/>

<h3>{'Pizzas'}</h3>

<img src={pizza} style={{width: '180px', height: '150px', paddingRight:'20px'}} alt="Umair's Cuisine"/>
<img src={pizaa1} style={{width: '180px', height: '150px', paddingRight:'20px'}} alt="Umair's Cuisine"/>
<img src={pizza2} style={{width: '180px', height: '150px'}} alt="Umair's Cuisine"/>
<br/>

</div>

    )
}

export default MenuPage