import React from "react"
import { NavLink } from "react-router-dom";
import { IBookInfo } from "src/types/books.types";
import s from '../styles/Card.module.scss';
import nfBook from '../assets/images/book-img-notfound.png';

interface ICardProps {
    id: string;
    props: IBookInfo
}

const Card:React.FC <ICardProps>= ({props, id}) => {
    return (
        <div className={s.card}>
            <NavLink to={`book/${id}`}><img src={props.imageLinks?.thumbnail ? props.imageLinks?.thumbnail : nfBook} className={s.card__img} alt='book_img' /></NavLink>
            <div className={s.card__text}>
                <span>{props.categories}</span>
                <span>{props.title.length < 30 ? props.title : props.title.substring(0, 30) + '...'}</span>
                {props.authors?.map((item) => <span>{item}</span>)}
            </div>
        </div>
    )    
}

export default Card