import React from "react"

const Button = (props) => <button className={props.className} onClick={props.onClick}>Click me to get a name for your Beer! {props.name}</button>


export default Button
