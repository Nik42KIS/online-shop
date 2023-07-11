import React from 'react'
import s from './../../styles/Home.module.css'
import BG from './../../images/computer.png'

const Poster = () => {
  return (
    <section className={s.home}>
        <div className={s.title}>BIG SALE 2022</div>
        <div className={s.product}>
            <div className={s.text}>
                <div className={s.subtitle}>The bestseller of 2022</div>
                <div className={s.head}>Lennon r2d2 with NVIDIA 5090 TI</div>
                <button className={s.button}>Shop now</button>
            </div>
            <div className={s.image}>
                <img src={BG} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Poster