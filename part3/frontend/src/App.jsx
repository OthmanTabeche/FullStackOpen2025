import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServices from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  // const [delatePerson, setDelatePerson] = useState("")

  useEffect(() => {
    personsServices
      .getAll()
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
    const personObject = {
      id: persons.length + 1,
      name: newName,
      phone: newPhone
    }

    const exist = persons.some((person) => person.name == newName);

    if (exist) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    personsServices
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewPhone("")
      })
  }

  const filtredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter))

  const handleDelete = (id) => {
    personsServices
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm 
        handleSubmit={handleSubmit} newName={newName} handleAddNewName={handleAddNewName} newPhone={newPhone} handleAddNewPhone={handleAddNewPhone}
      />

      <h3>Numbers</h3>

      <Persons filtredPersons={filtredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App