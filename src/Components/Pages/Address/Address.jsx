import React from 'react'
import styles from './Address.module.css'
import Image from './Image/Address.png'
import Header from '../../Header/Header'

const Address = () => {
  return (
    <div>
      <Header />
      <div className={styles.Address}>
        <div>
          <img src={Image} />
        </div>
        <div>
          <h1>Rua das guitarras / Leblon</h1>
          <p>Numero: 109</p>
        </div>
      </div>
    </div>
  )
}

export default Address