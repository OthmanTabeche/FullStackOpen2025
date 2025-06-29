import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAddNewName = (event) => {
    setNewName(event.target.value)
  }

  const hanleSubmit = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1
    }

    setPersons(persons.concat(nameObject))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={hanleSubmit}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleAddNewName}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) =>
          <div key={person.id}>
            {person.name}
          </div> 
        )}
    </div>
  )
}

export default App