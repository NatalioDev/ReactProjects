import Part from "./Part"
import Total from "./Total"

export default function Header({course}) {
  return (
    <div>
    {course.map((course)=> (
      <div key={course.id}>
        <h1>{course.name}</h1>
        {course.parts.map(part => (
            <Part key={part.id} part={part}/>
        ))}
        <Total part={course.parts}/>
      </div>
      ))}
    </div>
  )
}
