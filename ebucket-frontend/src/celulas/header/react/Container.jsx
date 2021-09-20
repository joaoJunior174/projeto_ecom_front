import "../css/header.css"
import Subretangulo from "../../../atomos/header/react/Subretangulo";
import Menu from "./Menu";

export default function Retangulo () {
    return <div className="_container container-fluid">
                <div className="d-flex justify-content-between flex-column _wrap">
                    <div className="d-flex flex-column">
                       <Menu/>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-sm-column  justify-content-around _teste">
                        <Subretangulo title="Serviços" description="Conheça nossos serviços" titleLink="Conhecer" link="www.google.com.br" />
                        <Subretangulo title="Plataforma" description="Descubra mais sobre nossa plataforma ecommerce" titleLink="Descubrir" link="www.google.com.br" />
                        <Subretangulo title="Planos" description="Escolha o melhor plano para sua empresa" titleLink="Escolher" link="www.google.com.br" />
                    </div>
                </div>
            </div>
}
