import "../css/body.css"
import Content from "../../../atomos/body/react/Content";
import ContentCentro from "../../../atomos/body/react/ContentCentro";
import MS from "../../../imagens/github.png";
import LE from "../../../imagens/mart.png";
import CU from "../../../imagens/usecase.png";
import FR from "../../../imagens/forum.png";
import IS from "../../../imagens/issues.png";
import TW from "../../../imagens/twitter.png";

export default function Conteudo () {
    return <div className="_grid container-fluid">
              <div className="row justify-content-center">
                  <div className="col-12 mt-5">
                     <h2>Lorem Ipsum</h2>
                  </div>
                  <div className="testeste row col-12">
                      <div className="row col-12 justify-content-center mt-5 mb-5">
                         <Content title="Lore Ipsum"
                                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Mauris ex eros, elementum id facilisis cursus, accumsan quis
                                        neque. Cras a eros consectetur, congue purus ut, maximus sem."
                         />
                          <Content title="Lore Ipsum"
                                   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                         Mauris ex eros, elementum id facilisis cursus, accumsan quis
                                         neque. Cras a eros consectetur, congue purus ut, maximus sem."
                          />
                          <Content title="Lorem Ipsum"
                                   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                         Mauris ex eros, elementum id facilisis cursus, accumsan quis
                                         neque. Cras a eros consectetur, congue purus ut, maximus sem."
                          />
                      </div>
                  </div>
                  <div className="row col-12 _conteudoCentral mt-5">
                       <div className="row col-12 justify-content-center">
                           <ContentCentro title="Github" path={MS}/>
                           <ContentCentro title="Lojas Exemplos" path={LE}/>
                           <ContentCentro title="Casos de uso" path={CU}/>
                           <ContentCentro title="Forum" path={FR}/>
                           <ContentCentro title="Issues" path={IS}/>
                           <ContentCentro title="Twitter" path={TW}/>
                       </div>
                  </div>
              </div>
           </div>
}