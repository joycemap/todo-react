import React from 'react';
import { hot } from 'react-hot-loader';

const List = props => (
    <ol>
      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
       
      }
    </ol>
  );

    
export default hot(module)(List);