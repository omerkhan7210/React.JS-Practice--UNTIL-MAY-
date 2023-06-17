import React from 'react';
import MyHeader from './Components/MyHeader';
import MyMainContent from './Components/MyMainContent';
import MyFooter from './Components/MyFooter';
import productsData from './Components/MainComponents/Products Data';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      loggedin:false,
      message:"subscribe",
      display:"block",
      class1 : "close",
      products : productsData
    }
    this.seeProd = this.seeProd.bind(this)
    this.seeCart = this.seeCart.bind(this)
    this.closeCart = this.closeCart.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  seeProd(){
    this.setState({
      loggedin:true,
      message:"successfully logged in",
      display:"none"
    }) 
  }

  seeCart(){
    this.setState({
      class1 : "open"
    })
  }

  closeCart(){
    this.setState({
      class1 : "close"
    })
  }

  addToCart(id){
    let updatedProds = this.state.products.map(prods => {
     
        console.log("id found",id," ", prods.id)
        return prods
      
    })
    this.setState({
       products : updatedProds
      })
    }


  render() {
    return (
      <div className='wrapper'>
        <MyHeader seeProd={this.seeProd} 
        message={this.state.message} 
        display={this.state.display} 
        seeCart = {this.seeCart}
        closeCart = {this.closeCart}
        class1 = {this.state.class1}
        products={this.state.products}
        />
        <MyMainContent loggedin={this.state.loggedin} ATC = {this.addToCart} />
        <MyFooter/>  
      </div>
    );
  }
}

export default App;
