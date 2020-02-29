import React from 'react';


class Form extends React.Component {

  render() {

    return (
      <div>
        <input
          onChange={event => {
            this.changeHandler(event);
          }}
          value={this.state.term.toUpperCase()}
          minLength="2"
          maxLength="200"
        />
        
        <input className={textbox} />
      </div>
    );
  }
}

export default Form;
