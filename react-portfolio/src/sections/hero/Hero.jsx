import React from 'react'
import styles from './HeroStyles.module.css'

function Hero() {
  return (
    <section id='hero'>
        <div>
            <img className={styles.hero} src='https://media.licdn.com/dms/image/v2/D5603AQHpVvrQGIbXZw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729991619033?e=1735776000&v=beta&t=aijWMboyH1TtyLWjfjnToWkMO1njva0i37utWii0r9k' alt='profile pic'></img>
        </div>
    </section>
  )
}

export default Hero