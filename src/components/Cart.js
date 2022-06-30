
import { useNavigate } from 'react-router-dom'
import styles from './cart.module.css'
export default function Cart(props) {
    const { items } = props
    const nagative = useNavigate()

    function sum() {
        let cnt = 0
        items.forEach(i => cnt += (i.price * i.amount))
        return cnt.toFixed(2)
    }

    function productsNum() {
        let cnt = 0
        items.forEach(i => cnt += i.amount)
        return cnt
    }
    function closeCart() {
        if (props.classCart)
            props.setClassCart(false)
    }

    return <aside className={props.classCart ? styles.smallCart : styles.bigCart}>
        {props.classCart ? <button className={styles.closeCartButton} onClick={() => { props.setClassCart(false); nagative(-1) }}>Close</button> : ""}
        <h2>Cart</h2>
        {items.length > 0 ?
            <div className={styles.cartDiv}>
                <div>
                    {items.map(i => <div key={i._id} className={styles.itemCard}>
                        <div className={styles.it}>
                            <div className={styles.imageCart} style={{ backgroundImage: `url(${i.image})` }}></div>
                            <span className={styles.titleCart}>{i.title}</span>
                        </div>
                        <div className={styles.priceCart}>{(i.price * i.amount).toFixed(2) + "$"}</div>
                        <div>
                            <button className={styles.addCart} onClick={() => props.addItem(i)}>+</button>
                            {i.amount}
                            <button className={styles.removeCart} onClick={() => props.removeItem(i)}>-</button>
                        </div>
                    </div>)}
                </div>
                <div>
                    <div className={styles.sum}>{`sum: ${sum()}$`}</div>
                    <div className={styles.prNum}>{`products num: ${productsNum()}`}</div>
                </div>
            </div>

            : <div>no products</div>
        }
    </aside >
}