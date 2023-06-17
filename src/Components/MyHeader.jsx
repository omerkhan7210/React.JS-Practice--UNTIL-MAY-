import React from 'react';

class MyHeader extends React.Component{

    
	render(){
	

		return (
			<header>
				<h1>Welcome to my website</h1>
				<nav>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Contact</a></li>
						<li><button type='button' onClick={this.props.seeProd} style={{display : this.props.display,
						padding: 5}}>Subscribe</button></li>
						<li><button type='button' onClick={this.props.seeCart} style={{fontSize:15, padding:5}}>Cart</button></li>
						
					</ul>
				</nav>

				<div id="cart-sidebar" className={this.props.class1}>
						<button onClick={this.props.closeCart} style={{fontSize:20, padding:5 , margin:5, background:"none", color:"white"}}>X</button>
						<center><h3>this is my cart</h3></center>
						<ul>
							<li>{this.props.products.name}</li>
						</ul>
				</div>
				

			</header>

		)
	}	

}

export default MyHeader
