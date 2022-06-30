import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CartMobile(props) {
    const nagative = useNavigate()
    const { setClassCart } = props

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => window.addEventListener('resize', () => {
        const wn = getWindowDimensions()
        if (wn.width > 769) {
            setClassCart(false)
            nagative(-1)
        }
    }), [])
    return <div></div>
}