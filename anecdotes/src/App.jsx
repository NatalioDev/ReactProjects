import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// const points = [0,3,4,5,6,7]

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export default function App() {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState({
    0:{ sentence: anecdotes[0], votes: 0 },
    1:{ sentence: anecdotes[1], votes: 0 },
    2:{ sentence: anecdotes[2], votes: 0 },
    3:{ sentence: anecdotes[3], votes: 0 },
    4:{ sentence: anecdotes[4], votes: 0 },
    5:{ sentence: anecdotes[5], votes: 0 }
  });

  const randomNumber = (min, max)=>{
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('frase numero',number)
    return number;
  }


  const handleVote = (selected) =>{
    const newVote = {...vote} 
    newVote[selected].votes += 1;
    setVote(newVote)
}

const sentenceWithMostVotes = Object.values(vote).reduce((prev, current) =>(prev.votes > current.votes) ? prev : current)

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{vote[selected].sentence}</p>
      <br />
      <p>Votes:{vote[selected].votes}</p>
      <button onClick={() =>(handleVote(selected))}>Vote</button>
      <Button 
        handleClick={() => setSelected(randomNumber(0,5))}
        text='Next Anecdote'
      />
      <h2>Anecdote with most votes</h2>
      <p>{sentenceWithMostVotes.sentence}</p>
      <p>Votes:{sentenceWithMostVotes.votes}</p>
    </>
  )
}