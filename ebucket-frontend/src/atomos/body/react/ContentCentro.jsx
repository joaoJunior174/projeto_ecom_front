import "../css/body.css"

export default function Content (props) {
    return <div className="_conteudoCentralItens col-md-3 col-12 col-sm-12 mt-5">
           <img className="_middleImage" src={props.path} alt="Logo"/>
           <h5><a href="#">{props.title}</a></h5>
    </div>
}