import React from 'react'
import { useState, useEffect } from 'react'

function Data() {
    const [name, setName] = useState([]);

    useEffect(() => {
        names()
    }, [])

const names = async () => {
    const res = await fetch('https://api.census.gov/data/2019/pep/charagegroups?get=NAME,POP&for=state');
    setName(await res.json())
}

return (
    <div>
        <h3> USA State Population </h3>
        <ul className = 'list-state list-state-population'>
            {name.map((data) => {
                return (
                    <li className = 'list-state-item' key = {data.name}> {data.population} </li>
                )
            })}
        </ul>
    </div>
)
}

export default Data;