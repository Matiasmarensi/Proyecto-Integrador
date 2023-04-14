import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   
   return (
      <div className={style.container} >
         
        {characters.map((personaje, index) => (
         
           <Card
           
           key={index}
           image={personaje.image}
           name={personaje.name}
           species={personaje.species}
           gender={personaje.gender}
           id={personaje.id}
           onClose={() => props.onClose(personaje.id)}
           />
        ))}
      </div>
    );
}
