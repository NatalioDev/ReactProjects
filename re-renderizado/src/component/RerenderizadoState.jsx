import { useState } from 'react';

const Display = ({counter}) =>{
    return(
        <div>{counter}</div>
    )
}

const Button = ({handleClick, text}) =>{
    return(
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

export default function RerenderizadoState () {

    const [counter, setCounter] = useState(0);

    //Controlador del evento Click:

    // const handleClick = () => {    console.log('clicked')  }

    //Ciclo infinito del contador:

    // setTimeout(
    //     () => setCounter(counter + 1),
    //     1000
    // );

    //Separamos los controladores de eventos (buenas práctica):

    const increaseByOne = () => setCounter(counter + 1)    
    const setToZero = () => setCounter(0)
    const decreaseByOne = () => setCounter(counter - 1)  

    console.log('rendering...', counter)

    return (
        <>
        <Display counter={counter}/>
        <Button 
            handleClick={increaseByOne}
            text='Plus'
        />
        <Button 
            handleClick={setToZero}
            text='Zero'
        />
        <Button 
            handleClick={decreaseByOne}
            text='Minus'
        />
        </>
    );
}
