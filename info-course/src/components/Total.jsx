
export default function Total({part}) {
    const totalExercises = part.reduce((sum,part) => {
      console.log('what is happening',sum,part)
      return sum + part.exercises
    }, 0)
  return (
    <>
      <p><strong>Total de ejercicios: {totalExercises}</strong></p>
    </>
  )
}
