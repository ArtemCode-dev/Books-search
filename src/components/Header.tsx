import { Container } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import {$api} from '../http/api'
import { useAppDispatch } from "src/hooks/store";
import s from '../styles/Header.module.scss';
import Input from "./shared/Input";
import Select from "./shared/Select";
import Text from "./shared/Text";
//import { IBooksRequest } from "src/types/books.types";
import { getBooks } from "src/store/thunks/fetchBooks";


const Header:React.FC= () => {

    const dispatch = useAppDispatch();
    const searchBooks = () => {
        dispatch(getBooks(searchVal))
    }

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            searchBooks()
        }
      };

    const [searchVal, getSearchVal] = useState('')

    return (
        <div className={s.header}>
            <Container>
                <div className={s.header__search}>
                    <NavLink to={'/'}><Text type={'h1'}>Search for Books</Text></NavLink>
                    <Input onKeyDown={keyDownHandler} value={searchVal} onChange={(event:React.ChangeEvent<HTMLInputElement>) => getSearchVal(event.target.value)} onClick={() => searchBooks()} type="input_search"/>
                </div>
                <div className={s.header__filters}>
                    <div className={s.header__filters__categories}>

                        <Text type={'h2'}>categories</Text>
                        <Select>
                            <option>all</option>
                            <option>art</option>
                            <option>biography</option>
                            <option>computers</option>
                            <option>history</option>
                            <option>medical</option>
                            <option>poetry</option>
                        </Select>
                    </div>
                    <div className={s.header__filters__sorting}>
                        <Text type={'h2'}>Sorting by</Text>
                        <Select>
                            <option>relevance</option>
                            <option>newest</option>
                        </Select>
                    </div>
                </div>
            </Container>
        </div>
    )    
}

export default Header