import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PacmanLoader } from 'react-spinners'
import styles from './category.module.css';

export default function Category(props) {
    const params = useParams()
    const [prods, setProds] = useState()
    const navigate = useNavigate()

    function handleDiv(e, p) {
        if (e.target.tagName != "BUTTON") {
            navigate(`${p._id}`)
        }
    }

    function addButton(p) {
        props.addItem(p)
    }

    function removeButton(p) {
        props.removeItem(p)
    }

    useEffect(() => {
        axios.get(`https://fake-store-netanel.herokuapp.com/products/category?category=${params.category}`)
            .then(res => setProds(res.data))
    }, [])

    return prods ? <div className={styles.cats}>
        <h2 className={styles.titleCat}>{params.category.toUpperCase().substring(0, 1) + params.category.substring(1)}</h2>
        {prods.map(p => <div className={styles.prods} onClick={(e) => handleDiv(e, p)} key={p.title}>
            <div className={styles.imagePs} style={{ backgroundImage: `url(${p.image})` }}></div>
            <div className={styles.pricePs}>{p.price + "$"}</div>

            {props.checkItem(p) ? <div className={styles.btDiv}>
                <button className={styles.addC} onClick={() => addButton(p)}>+</button>
                {props.checkItem(p)}
                <button className={styles.removeC} onClick={() => { removeButton(p) }}>-</button>
            </div>
                : <button className={styles.add} onClick={() => addButton(p)}>Add To Cart</button>}

            <div className={styles.titlePs}>{p.title}</div>
        </div>)
        }
    </div >
        : <div className={styles.cats}> <PacmanLoader size={"10vw"} /></ div>

}