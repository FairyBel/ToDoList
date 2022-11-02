import { Component } from "react";
import image from './heart1.jpg';
import imageTwo from './heart2.jpg'

export class Like extends Component{
    constructor(){
        super();
        this.state ={
            like: 'LIKE US!',
            img: image 
        }
    }

    upDateLike(){
        this.setState({like: "Thank you! We love you too!", img: imageTwo})
    }


render(){
    return(
    <div>
        <div className="container">
            <h1>{this.state.like}</h1>
        </div>
        <div className="container">
            <img onClick={() => this.upDateLike()} src={this.state.img} width='120px' alt='heart' />
        </div>
    </div>
    )
}


}