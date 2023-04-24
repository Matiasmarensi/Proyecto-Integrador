    import React, {useState} from 'react';
    import  {useParams} from "react-router-dom";
    import { useEffect } from "react";
    import style from "./Detail.module.css"

    // const id=useParams()
    
    
    // function chars() {
        
        // }
        
        
        export default function Detail (props){
            
            
            const {id}=useParams()
            const [character,setCharacter] = useState({});
            
            useEffect(() => {
                fetch(`http://localhost:3001/rickandmorty/character/${id}`)
                  .then((response) => response.json())
              .then((char) => {
                if (char.name) {
                      setCharacter(char);
                    } else {
                  window.alert("No hay personajes con ese ID");
                }
              })
              .catch((err) => {
                window.alert("No hay personajes con ese ID");
              });
            return setCharacter({});
          }, [id]);
            return (
                <div className={style.containerdetail}>
                  <img className={style.imagen} src={character.image} alt='imagen'/>
                  <div className={style.texto} >
                    <h1 >Name: {character.name}</h1>
                    <h3>Status: {character.status}</h3>
                    <h3>Specie: {character.species}</h3>
                    <h3>Gender: {character.gender}</h3>
                    <h3>Origin: {character.origin?.name}</h3>
                  </div>
              
                </div>
        )
    }