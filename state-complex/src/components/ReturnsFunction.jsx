import { useState } from "react"

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = props => <div>{props.value}</div>

export default function ReturnsFunction() {
    const [value, setValue] = useState(10)
 //Forma Simple:
    // const hello = () =>{
    //     const handler = () => console.log("Hello World")
    //     return handler
    // }

 //Forma Dinamica:
    // const hello = (who) => {
    //     const handler = () => {
    //         console.log("Hello", who)
    //     }
    //     return handler
    // }
 //Forma Dinamica(abreviada):
    // const hello = (who) => () => {
    //     console.log('hello', who)
    // }

 //Forma Dinamica:
    const setToValue = (newValue) =>{
        setValue(newValue)
    }

    return (
    <div>
        <Display value={value}/>
        <br/>
        {/* <button onClick={() => setToValue(1000)}>
            Thousand
        </button>
        <button onClick={() => setToValue(value + 1)}>
            Increment
        </button>
        <button onClick={() => setToValue(value - 1)}>
            Decrease
        </button>
        <button onClick={() => setToValue(0)}>
            Reset
        </button> */}
        <Button handleClick={() => setToValue(100)} text="Thousand"/>
        <Button handleClick={() => setToValue(0)} text="Reset"/>
        <Button handleClick={() => setToValue(value + 1)} text="Increment"/>
        <Button handleClick={() => setToValue(value - 1)} text="Decrease"/>
    </div>
    )
}
