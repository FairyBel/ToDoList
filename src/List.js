import { Component } from "react";
import image from './check.png'

export class List extends Component{
    state={
        userInput: '',
        userList: []
    }

    onChangeEvent(e){
        this.setState({userInput: e})
        console.log(e);
    }

    addItem(input){
        if (input === ''){
            alert('Enter an item')
        } else{
        let arrList = this.state.userList;
        arrList.push(input);
        this.setState({userList: arrList, userInput: ''})
    }
}

    doneList(event){
        const li = event.target;
        li.classList.toggle('done');
    }

    deleteItem(){
        let arrList = this.state.userList;
        arrList= [];
        this.setState({userList: arrList})
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
        <div>
            <form onSubmit={this.onFormSubmit} className="container">
                
                <input type='text'
                placeholder='Write your plan...'
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} />
                <button onClick={() => this.addItem(this.state.userInput)} className='btn btn-add'>ADD</button>
                <ul>
                {this.state.userList.map((item, index)=>(
                    <li onClick={this.doneList} key={index}>
                        <img src={image} width='25px' alt='check' />
                        {item}</li>
                    ))}
                </ul>
                <button onClick={() => this.deleteItem()} className='btn btn-del'>Delete</button>
            </form>
        </div>  
        )
    }
}