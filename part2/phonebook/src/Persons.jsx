const Persons = ( { filtredPersons, handleDelete } ) => {
    return (
        <div>
            {filtredPersons.map((person) =>
                <div key={person.id}>
                    {person.name} {person.phone}
                    <button onClick={() => handleDelete(person.id)}>
                        delate
                    </button>
                </div> 
            )}
        </div>
    )
}

export default Persons