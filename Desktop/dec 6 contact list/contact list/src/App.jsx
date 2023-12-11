import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      const data = await response.json()
      //console.log(data)
      setUsers(data)

    }
    fetchUsers()
    
  }, [])

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1)
    })
  },[])

  const user = users.find((user) => {
    return hash === user.id
    
  })
  //console.log(user.id)
  return (
    <div>
      <h1>Contact List ({users.length}) </h1>
      
      <ul>
        {
          users.map((user) => {
            return (
              <li key={user.id}> 
                <a href={`#${user.id}`}>
                  {user.name} 
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>)
}

export default App
