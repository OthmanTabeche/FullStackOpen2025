import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{}]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleAddNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }

    const exist = persons.some((person) => person.name == newName);

    if (exist) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons(persons.concat(nameObject))
    setNewName("")
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleAddNewName}
          />
        </div>
        <div>
            number: <input 
                      type='number'
                      value={newPhone}
                      onChange={handleAddNewPhone}
                      />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map((person) =>
          <div key={person.id}>
            {person.name} {person.phone}
          </div> 
        )}
    </div>
  )
}

export default App