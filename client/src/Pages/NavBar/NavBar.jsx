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
                    <button className={s.btnback}>{'<='}</button>
                </Link>
            </div>
            <div className={s.search}>
                <SearchBar />
            </div>
            <div className={s.filters}>
                <FilterButton />
            </div>
            <div className={s.sorts}>
                <SortButton />
            </div>
            <div className={s.create}>
                <Link to='/create'>
                    <button className={s.btnCreate}>Create new Tourist Activity</button>
                </Link>
            </div>
        </header>
    )
}

export default NavBar