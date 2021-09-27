import "../css/body.css"


export default function Content (props) {
    return <div className="_paragraphDiv col-md-3 col-12 col-sm-12">
              <h3>{props.title}</h3>
              <p>{props.text}</p>
           </div>
}