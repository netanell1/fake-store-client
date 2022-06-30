
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from 'react-spinners'
import styles from './home.module.css'

export default function Home() {
    const [cat, setCat] = useState()


    useEffect(() => {
        axios.get('https://fake-store-netanel.herokuapp.com/categories')
            .then(res => setCat(res.data))
    }, [])
    return cat ? <div className={styles.cats}>
        {cat.map(c => <Link to={`category/${c.name}`} className={`${styles.cat} ${c.name}`} key={c._id}>{c.name[0].toUpperCase() + c.name.substring(1)}</Link>)}
    </div>
        : <div className={styles.cats} > <PacmanLoader size={"10vw"} /></div>

}