import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <table>
      <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  </table>
)
export default function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const All = good + neutral + bad;
  const Average = (good  + (-bad)) / All;
  const Positive = good / All *100;
  return (
    <>
      Hello World
      <div>
        <h2>Give Feedback</h2>
        <Button handleClick={() => setGood((good) => good + 1)} text='Good'/>
        <Button handleClick={() => setNeutral((neutral) => neutral + 1)} text='Neutral'/>
        <Button handleClick={() => setBad((bad) => bad + 1)} text='Bad'/>
      </div>
      <div>
        <h2>Statistics</h2>
          {All === 0 ? 'No feedback given' : <>
            <Statistics text='Good' value={good} />
            <Statistics text='Neutral' value={neutral} />
            <Statistics text='Bad' value={bad} />
            <Statistics text='All' value={All} />
            <Statistics text='Average' value={Average} />
            <Statistics text='Positive' value={Positive} />
            </>
          }
        </div>
    </>
  )
}