import React from 'react';
import ReactDOM from 'react-dom';
//import { directive } from '@babel/types';


class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0
        };
       //this.handleIncrement = this.handleIncrement.bind(this)
    }

      handleIncrement = () =>
      { 
          alert('This webpage is used to track the number of times this message has been viewed');
          this.setState({ count: this.state.count +1});
          
      }

     
     render()
    {
        return (
            <div align = 'center' >
                
                <div>{this.state.count}</div>
                
                <div>
                  <button
                    onClick = {
                        this.handleIncrement
                    } 
                    
                   >Click me for more info!</button>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Counter/>,
    document.querySelector('#root')
)

 