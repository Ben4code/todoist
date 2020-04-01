import React from 'react'
import {FaPizzaSlice} from 'react-icons/fa'


export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="https://raw.githubusercontent.com/karlhadwen/todoist/master/public/images/logo.png" alt="Todoist"/>
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
              <FaPizzaSlice/>
          </ul>
        </div>  
      </nav>
    </header>
  )
}
