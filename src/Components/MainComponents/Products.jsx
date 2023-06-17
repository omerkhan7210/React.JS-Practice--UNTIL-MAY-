import React , {Component} from 'react';
import MyMainContent from '../MyMainContent';

class Products extends Component {

    render (){
        return(
           
            <div className={"column " + this.props.hide}>
                <div className="card">
                    <img src={"../src/assets/" + this.props.imgURL} alt={this.props.name}/>
                    <h3>{this.props.name}</h3>
                    <p>Description of {this.props.name}</p>
                    <button className="add-to-cart" onClick={()=> this.props.ATC2(this.props.id)}>Add to Cart</button>
                    <button className="delete" onClick={this.props.item}>Delete</button>
                </div>
            </div>
       
        )
    }
    

}

export default Products