import style from "./RandomCards.module.css";


export default function RandomCards(props) {
    

    return (
        <div className={style.containerRandom}>
           
           <button className={style.boton}onClick={()=>props.random()}>Random Card</button>
        </div>
     );
  
}

