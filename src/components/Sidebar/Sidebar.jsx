import React from 'react'

import {NavLink} from 'react-router-dom'

import { ROUTES } from '../../utils/routes'
import s from './../../styles/Sidebar.module.css'
import { useSelector } from 'react-redux'


const Sidebar = () => {

  const { list } = useSelector(({categories}) => categories)
 console.log('list', list)
  return (
    <section  className={s.sidebar}>
      <div className={s.title}>CATEGORIES</div>
      <nav >
        <ul className={s.menu}>
          { list.map(({id, name}) => (
             <li key={id}>
                <NavLink 
                className={({ isActive }) => `${s.link} ${ isActive ? s.active : ''}`}
                to={`/categories/${id}`}>{name}</NavLink
                >
            </li>
          ))}
         
        </ul>
      </nav>
      <div className={s.footer}>
        <a 
            href="/help"
            target='_blank'
            rel='noreferrer'
            className={s.link}
            >
              Help
        </a>
        <a 
            href="/terms"
            target='_blank'
            rel='noreferrer'
            className={s.link}
            style={{textDecoration: "underline"}}
            >
              Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar