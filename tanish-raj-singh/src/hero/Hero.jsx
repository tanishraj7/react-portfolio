import React from 'react'
import styles from './HeroStyles.module.css'
import themeIcon from '../assets/sun.svg'
import githubIcon from '../assets/github-light.svg'
import linkedinIcon from '../assets/linkedin-light.svg'
import CV from '../assets/tanish-raj-cv.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img src='https://media.licdn.com/dms/image/v2/D5603AQHpVvrQGIbXZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729991619033?e=1736380800&v=beta&t=lPb98_lUhNgu-0yCvsAjyn-ReCE9kHy622YQQFn_5h4' alt='profile pic' className={styles.hero}></img>
            <img src={themeIcon} alt='theme icon' className={styles.colorMode}></img>
        </div>
        <div className={styles.info}>
            <h1>Tanish Raj <br/> Singh</h1>
            <h2>Computer Science Engineer</h2>
            <span>
                <a href='https://www.linkedin.com/in/tanishrajsingh/' target='_blank'>
                <img src={linkedinIcon} alt='linkedin'></img>
                </a>
                <a href='https://github.com/tanishraj7' target='_blank'>
                <img src={githubIcon} alt='github'></img>
                </a>
            </span>
            <p>its all in the mind!!</p>
            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero