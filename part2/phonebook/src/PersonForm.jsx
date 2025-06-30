const PersonForm = ( {handleSubmit, newName, handleAddNewName, newPhone, handleAddNewPhone} ) => {
    

    return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleAddNewName}
          />
        </div>
        <div>
            number: <input 
                      value={newPhone}
                      onChange={handleAddNewPhone}
                      />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
