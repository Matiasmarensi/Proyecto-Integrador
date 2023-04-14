
import SearchBar from '../Searchbar/SearchBar';
import style from "./Nav.module.css"
import RandomCards from '../RandomCard/RandomCard';

import {NavLink} from 'react-router-dom'



export default function Nav(props) {
    return (
        
        <div className={style.container}>
          <div className={style.container2}>
       <NavLink to='/home'><img className={style.imagen}src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"}alt= 'imagen' /></NavLink>
       </div>
       <SearchBar onSearch={props.onSearch}/>
          <RandomCards random={props.random}/>
          <div className={style.container3}>

          <NavLink  to="/About" >
            <p >About</p>
            </NavLink>
            <NavLink to="/favorites" >
              <p >Favorites</p>
            </NavLink>
            <NavLink to="/home" >
            <p>Home</p>
            </NavLink>
          </div>
        </div>
       
        
      
    );
  }