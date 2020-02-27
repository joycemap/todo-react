import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor(){
    super()
  
    this.state = {
      word : ""
    }
  }
  
  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  clickHandler(){
    console.log("clicking");
  }
  render() {
      console.log("rendering");
      return (
        <div className="item">
          {this.state.word}
          <input onChange={(event)=>{this.changeHandler(event);}}/>
        
<button onClick={()=>{this.clickHandler()}}>ADD</button>
</div>
      );
  }
}

export default hot(module)(App);
