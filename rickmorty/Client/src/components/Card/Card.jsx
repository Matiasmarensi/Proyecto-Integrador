
import style from "./Card.module.css"
import {Link} from "react-router-dom"

import { connect } from 'react-redux'
import {addFavorite,deleteFavorite} from '../../redux/actions'

import { useState, useEffect } from "react" 







export function mapStateToProps(state){
  
   return {
         myFavorites:state.myFavorites
   }
   
}

export function Card(props) {


   const [isFav, setIsFav] = useState(false);
   const handleFavorite=()=>{
      if (isFav) {
         setIsFav(false);
        props.deleteFavorite(props.id)
         
      } else {
         setIsFav(true);
        props.addFavorite(props);
       }
     };
     useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   
   return (
      <div className={style.container}>
         <div >  {
         isFav ? (
            <button className={style.fav} onClick={handleFavorite}>💖</button>
         ) : (
            <button className={style.fav} onClick={handleFavorite}>🤍</button>
         )
      }
      </div>
         <div >
           
         <button className={style.boton} onClick={props.onClose}>X</button></div>
         <Link to={`/detail/${props.id}`}>
                  
      <img className={style.imagen} src={props.image} alt={props.name} />
         <h2 className={style.nombre}>{props.name}</h2>
      
      
       <div className={style.datos}  >
      <p>{props.species}</p>
      <p>{props.gender}</p>
      </div>
     </Link>
   
      
      
      
   </div>
   );
}
function mapDispatchToProps (dispatch) {
  return {
     addFavorite:(char)=>{
        dispatch(addFavorite(char));
     },
     deleteFavorite: (id)=>{
        dispatch(deleteFavorite(id)) 
     }
  }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Card);