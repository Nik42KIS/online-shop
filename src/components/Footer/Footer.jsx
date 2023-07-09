import React from 'react'
import {Link} from 'react-router-dom'

import { ROUTES } from '../../utils/routes'
import s from './../../styles/Footer.module.css'

import LOGO from '../../images/logo.svg'

const Footer = () => {
  return (
    <section className={s.footer}>
        <div className={s.logo}>
            <Link to = {ROUTES.HOME}>
                <img src={LOGO} alt="stuff" />
            </Link>
        </div>
        <div className={s.rights}>
          Developed by{" "}
          <a 
          href="https://github.com/Nik42KIS"
          target='_blank'
          rel='noreferrer'
          >
            Kiselevich
          </a>
        </div>

        <div className={s.socials}>
        <a 
          href="https://github.com/Nik42KIS"
          target='_blank'
          rel='noreferrer'
          >
            <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
          </a>

          <a 
          href="https://github.com/Nik42KIS"
          target='_blank'
          rel='noreferrer'
          >
            <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
          </a>

          <a 
          href="https://github.com/Nik42KIS"
          target='_blank'
          rel='noreferrer'
          >
            <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
          </a>
        </div>
    </section>
  )
}

export default Footer