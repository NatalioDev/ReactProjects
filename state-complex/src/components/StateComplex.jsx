import { useState } from "react"

export default function StateComplex() {
    //Uso simple
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)

    //Uso con objetos:
    const [clicks, setClicks] = useState({
        left:0, right:0
    });

    const handleLeftClick = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
      }
        setClicks(newClicks)
    }

    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1
      }
        setClicks(newClicks)
    }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {clicks.right}
    </div>
  )
}
