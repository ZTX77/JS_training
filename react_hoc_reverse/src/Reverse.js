import React from 'react';

const reverseText = (PassedComponent) =>
    ({children, ...props}) =>
        <PassedComponent{...props} >
            {children.split('').reverse()}
        </PassedComponent>

const Input  = (props) =>  <h1>{props.children}</h1>
const Reverse = reverseText(Input);

export default Reverse