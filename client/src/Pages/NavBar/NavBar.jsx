import React from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SortButton from "../../Components/SortButton/SortButton";
import FilterButton from "../../Components/FilterButton/FilterButton";
import { Link } from "react-router-dom";
import s from './NavBar.module.css'

function NavBar() {
    return (
        <header className={s.container}>
            <div className={s.back}>
                <Link to='/'>
                    <img  src={'https://res.cloudinary.com/dvzgzgzln/image/upload/v1660012370/lets-travel/let_s_travel_mrurtn.png'} className={s.btnback}/>
                </Link>
            </div>
            <div className={s.search}>
                <SearchBar />
            </div>
            <hr className={s.lines}/>
            <div className={s.create}>
                <Link style={{ textDecoration: 'none' }} to='/create'>
                    <button className={s.btnCreate}>Add a new activity <img className={s.img} src='https://res.cloudinary.com/dvzgzgzln/image/upload/v1661468799/lets-travel/Icons/2664_uau1hy.png'/></button>
                </Link>
            </div>
            <hr className={s.lines}/>
            <div className={s.sorts}>
                <SortButton />
            </div>
            <hr className={s.lines}/>
            <p className={s.font}>Filter</p>
            <hr style={{width:'20.5vw' , borderColor:'#000', position:'relative', marginLeft:'0px', paddingLeft:'0px'}}/>
            <div className={s.filters}>
                <FilterButton />
            </div>
            <hr className={s.lines}/>
            <div className={s.create}>
                <Link style={{ textDecoration: 'none' }} to='/about'>
                    <button className={s.btnCreate}>More about <img className={s.img} src='https://res.cloudinary.com/dvzgzgzln/image/upload/v1661468247/lets-travel/Icons/ic_info_48px-512_maoecs.webp'/> </button>
                </Link>
            </div>
        </header>
    )
}

export default NavBar