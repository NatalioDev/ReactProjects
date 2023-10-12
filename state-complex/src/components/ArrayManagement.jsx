import { useState } from "react"

const History = (props) => {
    if(props.allClicks.length === 0){
        return(
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }
    return(
        <div>Button press history: {props.allClicks.join(' ')}</div>
    )
}

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

export default function ArrayManagement() {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAllClicks] = useState([])

    const handleLeftClick = () =>{
        setAllClicks(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () =>{
        setAllClicks(allClicks.concat('R'))
        setRight(right + 1)
    }
  return (
    <div>
        {left}
        <Button onClick={handleLeftClick} text='Left'/>
        <Button onClick={handleRightClick} text='Right'/>
        {right}
        <History allClicks={allClicks} />
    </div>
  )
}
