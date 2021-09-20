import "../css/header.css"

export default function Subretangulo(props){
    return <div className="d-flex flex-column _servicos">
               <div className="_title _font align-self-center">
                   <h1>{props.title}</h1>
               </div>
               <div className="_description _font align-self-center">
                   <h5>{props.description}</h5>
               </div>
               <div className="_redirect align-self-center">
                   <a href={props.link}>{props.titleLink}</a>
               </div>
           </div>
}