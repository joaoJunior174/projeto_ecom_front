import "../css/header.css"
import Logo from "../../../atomos/header/react/Logo"

export default function Menu () {
    return <div className="d-flex flex-row _menu justify-content-sm-around justify-content-md-between justify-content-around">

           <div className="d-flex">
              <Logo/>
           </div>
           <div className="_links">
               <a href="#">Documentação</a>
               <a href="#">Serviços</a>
               <a href="#">Planos</a>
               <a href="#">Quem Somos</a>
               <a href="#">Suporte</a>
           </div>
           </div>
}
