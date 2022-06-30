import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './ButtonCart.module.css'
import Cart from './Cart'


export default function ButtonCart(props) {
    const nagative = useNavigate()
    return <div className={styles.button}>
        <button className={styles.button} onClick={() => { props.setClassCart(true); nagative("/mobile/cart") }} >Go To Cart</button>
    </div>
}