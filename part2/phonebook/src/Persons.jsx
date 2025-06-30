const Persons = ( {filtredPersons} ) => {
    return (
        <div>
            {filtredPersons.map((person) =>
                <div key={person.id}>
                    {person.name} {person.phone}
                </div> 
            )}
        </div>
    )
}

export default Persons