import hamburger from "../../../imagens/hamburger.png"
import "../css/header.css"
import $ from 'jquery';

export default function Hamburger () {
    return <img onClick={(e)=>showSideBar(e)} className="_hamburgerImg" src={hamburger} alt="Logo"/>;
}

function showSideBar(e) {

    let disp = document.getElementById("sidebar").style.display;
    if(disp === "none")
        document.getElementById("sidebar").style.display = "flex";
    else
        document.getElementById("sidebar").style.display = "none";
}

