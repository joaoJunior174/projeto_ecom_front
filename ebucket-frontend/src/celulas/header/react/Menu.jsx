import "../css/header.css"
import Logo from "../../../atomos/header/react/Logo"
import Hamburger from "../../../atomos/header/react/Hamburger";
import SideMenu from "../../../atomos/header/react/SideMenu";

export default function Menu () {

    return <div className="d-md-flex flex-md-row _menu justify-content-sm-around justify-content-md-between justify-content-around">

           <div className="_hamburger">
             <Hamburger/>
             <div id="sidebar" className="_sidemenu">
                 <SideMenu link1="Documentação" link2="Serviços" link3="Planos" link4="Quem somos" link5="Suporte"/>
             </div>
             </div>
           <div className="">
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
