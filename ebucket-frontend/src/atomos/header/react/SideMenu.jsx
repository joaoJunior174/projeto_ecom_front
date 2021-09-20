import "../css/header.css"

export default function SideMenu(props){
    return <div className="d-flex flex-column">
                <a href="#">{props.link1}</a>
                <a href="#">{props.link2}</a>
                <a href="#">{props.link3}</a>
                <a href="#">{props.link4}</a>
                <a href="#">{props.link5}</a>
           </div>
}