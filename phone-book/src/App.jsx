import { useState } from "react"
import PersonShow from "./components/PersonShow"
import PersonForm from "./components/PersonForm"
import FilterPerson from "./components/FilterPerson"

export default function App() {
  const [persons, setPersons] = useState({
  0: {name: 'Nata Di Giacomo', number: 595989498, id: 0},
  1: { name: 'Arto Hellas', number: 1234212156, id: 1 },
  2: { name: 'Ada Lovelace', number: 5323523, id: 2 },
  3: { name: 'Dan Abramov', number: 1243234345, id: 3 },
  4: { name: 'Mary Poppendieck', number: 39236423122, id: 4 }
  })

  //Manejos de estados
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [filterName, setFilterName] = useState('')


  const addPerson = (event) => {
    //Evita recargar toda la pagina
    event.preventDefault();

    // Verificamos si los campos de entrada están vacíos
    if (!newName || !newNumber) {
      setErrorMessage('Por favor, complete los.');
      return;
    }

  // Verifica si el nombre ya existe en el array 'persons'
  const nameDuplicate = Object.values(persons).some(person => person.name === newName);

// Verifica si el número ya existe en el array 'persons'
  const numberDuplicate = Object.values(persons).some(person => person.number === newNumber);

  // Si ni el nombre ni el número son duplicados...
  if (!nameDuplicate && !numberDuplicate) {

    //Crea el nuevo object
      const personObject = {
        name: newName,
        id: Object.keys(persons).length +1,
        number: newNumber,
      }

  // Añadimos la nueva persona al estado de las personas
  setPersons({...persons, [personObject.id]: personObject});

  // Limpia los campos 'newName', 'newNumber' y 'ErrorMessage'
  setNewName('');
  setNewNumber('');
  setErrorMessage(null);

  // Imprime el array 'persons' y 'personObject'
  console.log(persons);
  console.log(personObject);
} else {
  // Si hay un duplicado, muestra una alerta
  if (nameDuplicate) {
    setErrorMessage('El nombre '+ newName + ' ya existe en la lista.');
  }
  
  if (numberDuplicate) {
    setErrorMessage('El número ya existe en la lista.');
  }
  if (numberDuplicate && nameDuplicate) {
    setErrorMessage('El nombre '+ newName + ' y el número ya existe en la lista.');
  }
}}

// Esta función se activa cuando ocurre un evento, como un cambio en un campo de entrada.
const handleToPerson = (event) => {
  console.log(event.target.value)

  // Actualiza el estado de `newName` con el valor actual del campo de entrada.
  setNewName(event.target.value)
}

// Esta función se activa cuando ocurre un evento, como en el código anterior
const handleToNumber = (event) => {
  console.log(event.target.value)
  const value = event.target.value;
  if (value === "" || (Number.isInteger(Number(value)) && Number(value) >= 0)) {
    setNewNumber(value)
  }else{
    setErrorMessage('Por favor, ingresa sólo números enteros.')
  }
}

//Función para manejar los cambios en el filtro
const handleFilterChange = (event) => {
  setFilterName(event.target.value)
}

//Filtramos las personas por su nombre
const filteredPersons = Object.values(persons).filter(person =>
  person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      Hello World
      <FilterPerson 
        filterName={filterName}
        handleFilterChange={handleFilterChange}
      />
      <h2>Phonebook</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber}
        handleToNumber={handleToNumber}
        handleToPerson={handleToPerson}
        addPerson={addPerson}
        errorMessage={errorMessage}
      />
      <h2>Diary</h2>
        {filteredPersons.map(person => <PersonShow key={person.id} person={person} />)}
    </div>
  )
}
