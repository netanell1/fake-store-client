import { Route, Routes } from "react-router-dom";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "./Cart";
import './main.css'
import { useEffect, useState } from 'react'
import ButtonCart from "./ButtonCart";
import CartMobile from "../pages/CartMobile"

export default function Main() {

    const [items, setItems] = useState([])

    function addItem(item) {
        const itemEx = items.find(i => i._id === item._id)
        if (itemEx) {
            itemEx.amount++
            setItems([...items])
            return
        }
        setItems([...items, { ...item, amount: 1 }])
    }

    function removeItem(item) {
        const it = items.find(i => i._id === item._id)
        it.amount--
        if (it.amount < 1) {
            items.splice(items.findIndex(i => i._id === it._id), 1)
            setItems([...items])
            return
        }
        setItems([...items])
    }

    function checkItem(item) {
        const itemEx = items.find(i => i._id === item._id)
        if (itemEx) {
            return itemEx.amount
        }
        else return false
    }

    const [classCart, setClassCart] = useState(false);

    return <main>
        < Cart items={items} addItem={addItem} setItems={setItems} removeItem={removeItem} classCart={classCart} setClassCart={setClassCart} />
        {!classCart && <ButtonCart setClassCart={setClassCart} />}
        <Routes>
            <Route path="/mobile/cart/" element={<CartMobile setClassCart={setClassCart} />} />
            <Route path="/" element={<Home />} />
            <Route path="category/:category" element={<Category checkItem={checkItem} addItem={addItem} removeItem={removeItem} />} />
            <Route path="category/:category/:product/*" element={<Product checkItem={checkItem} addItem={addItem} removeItem={removeItem} />} />
        </Routes>
    </main>
}