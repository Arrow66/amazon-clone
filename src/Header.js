import React from 'react'
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"

function Header() {
  return (
      <nav className='header'>
          <Link to={"/login"}>
              <img className="header__logo" alt='amazon logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
          </Link>
          <div className='header__search'>
              <input type="text" className='header__searchInput' />
              <SearchIcon className='header__searchIcon' />
          </div>
          <div className='header__nav'>


          </div>
      </nav>
  )
}

export default Header