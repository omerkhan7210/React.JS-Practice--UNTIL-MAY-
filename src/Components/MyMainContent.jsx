import React  from 'react';
import Products from './MainComponents/Products';
import productsData from './MainComponents/Products Data';
import MyHeader from './MyHeader';



class MyMainContent extends React.Component {


  constructor(){
    super()
    this.state = {
      columns : 2,
      display:"none",
      hide: "",
      loading : false,
      character : {}
    }
    this.showMore = this.showMore.bind(this)
    this.showLess = this.showLess.bind(this)
    this.itemDelete = this.itemDelete.bind(this)
  }
  
  componentDidMount(){
    this.setState({
      loading: true
    })
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data)=>{
      this.setState({
        loading:false,
        character: data
      })
    })
  }


    showMore(){
      this.setState({
        columns: this.state.columns+3,
        display:"block"
      })
    }

    
    showLess(){
      this.setState({
        columns: this.state.columns-3
      })
    }

    
    itemDelete(){
      this.setState({
        hide: "hide"  
      })
    }
    

    render (){
      const productEntries = Object.entries(this.state.character);
      const prodData = productEntries.map(([value, index])=>{

          if(this.props.loggedin == true){
            return (
                <Products name={value.title} imgURL={value} key={value} ATC2={ this.props.ATC} id={value} item={this.itemDelete} hide={this.state.hide}/>    
            )
          }
      })

        if(this.props.loggedin == false){
            return("Please Subscribe First")
        }
  
          return (
            <div className="container">
            {prodData}
            <div style={{display:"flex",justifyContent: "center",width:"100%",marginBlock:"1rem", gap:"1rem"}}>
            <button type='button' style={{padding:"0.5rem 1rem", display : this.state.columns === (productsData.length-1) ? "none" : "block"}} onClick={this.showMore}>Show More..</button>
            <button type='button' style={{padding:"0.5rem 1rem",display:this.state.display}} onClick={this.showLess}>Show Less..</button>
            </div>
        
            </div>
            
            )
    }
    
}

export default MyMainContent 