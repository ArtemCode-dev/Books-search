import React from "react"
import s from '../styles/Book.module.scss';
import { useTypedSelector } from "src/hooks/store";
import Container from "src/components/shared/Container";
import Text from "src/components/shared/Text";
import { useParams } from 'react-router';
import nfBook from '../assets/images/book-img-notfound.png';


const Book:React.FC = () => {

    const {id} = useParams();
    const {books} = useTypedSelector((state) => state.books);
    const book = books.find((el) => el.id === id);

    if(!book) {
        return (
            <div>Not found</div>
        )
    }

    return (
        <Container>
            <div className={s.book}>
                <div className={s.book__img}>
                    <img src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks.thumbnail : nfBook} alt='book_img' />
                </div>
                <div className={s.book__body}>
                    <div className={s.book__body__info}>
                        <div className={s.book__body__info__text}>{book.volumeInfo.categories?.map((item) => (<Text isBlack type="p">{item}</Text>))}</div>

                        <div className={s.book__body__info__text}><Text isBlack type="h1">{book.volumeInfo.title}</Text></div>

                        <div className={s.book__body__info__text}>{book.volumeInfo.authors?.map((item) => (<Text isBlack type="p">{item}</Text>))}</div>
                    </div>

                    <div className={s.book__body__description}>
                        <Text isBlack type="p">{book.volumeInfo.description}</Text>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Book