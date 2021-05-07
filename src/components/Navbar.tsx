import React from 'react'
import data from '../data/data'
import { Nav } from '../UI/Pages'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <ul>
        {data.navbar.map(list => (
          <li key={list.id}>
            <a href={list.url}>{list.text}</a>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

export default Navbar
