import React, {useState} from 'react'

function FunctionCounterThree() {
    const [name, setName] = useState({firstname: '', lastname: ''})
  return (
    <div>
      <input type="text" value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}/>
      <input type="text" value={name.lastname} onChange={e => setName({...name, lastname: e.target.value})}/>
      <h1>Your firstname is {name.firstname}</h1>
      <h1>Your lastname is {name.lastname}</h1>
    </div>
  )
}

export default FunctionCounterThree
