import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleAddNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNewPhone = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilter = (event) => {
      setFilter(event.target.value)
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
    setNewPhone("")
  }

  const filtredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm 
        handleSubmit={handleSubmit} newName={newName} handleAddNewName={handleAddNewName} newPhone={newPhone} handleAddNewPhone={handleAddNewPhone}
      />

      <h3>Numbers</h3>

      <Persons filtredPersons={filtredPersons} />
    </div>
  )
}

export default App