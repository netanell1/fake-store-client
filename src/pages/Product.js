import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from 'react-spinners'
import styles from './product.module.css'
export default function Product(props) {
    const params = useParams()
    const [p, setP] = useState()

    useEffect(() => {
        axios.get(`https://fake-store-netanel.herokuapp.com/product?id=${params.product}`)
            .then(res => setP(res.data))
    }, [])


    // const location = useLocation()
    // const { p } = location.state

    function addButton(e, p) {
        e.preventDefault()
        props.addItem(p)
    }

    function removeButton(e, p) {
        e.preventDefault()
        props.removeItem(p)
    }

    return p ? <div className={styles.pr}>
        <div className={styles.imageP} style={{ backgroundImage: `url(${p.image})` }}></div>
        {/* <img className={styles.imageP} src={p.image} alt="product image" width="300" height="300" /> */}
        <div className={styles.titleP} >{p.title}</div>

        {props.checkItem(p) ? <div className={styles.btDiv}>
            <button className={styles.addC} onClick={(e) => addButton(e, p)}>+</button>
            {props.checkItem(p)}
            <button className={styles.removeC} onClick={(e) => { removeButton(e, p) }}>-</button>
        </div>
            : <button className={styles.add} onClick={(e) => addButton(e, p)}>Add To Cart</button>}

        <div className={styles.priceP} >{p.price + "$"}</div>
        <div className={styles.desP} >{p.description}</div>
    </div>
        : <div className={styles.pr}> <PacmanLoader size={"10vw"} /></div>
}