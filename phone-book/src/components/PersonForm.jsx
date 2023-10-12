
export default function PersonForm({newName, newNumber, handleToPerson, handleToNumber, addPerson, errorMessage}) {
  return (
    <div>
        <form onSubmit={addPerson}>
        <div>
          Name: <input 
                  type="text" 
                  value={newName}
                  onChange={handleToPerson}
                />
          <br />
          Number: <input 
                  type="number" 
                  value={newNumber}
                  onChange={handleToNumber}
                />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </form>
    </div>
  )
}
