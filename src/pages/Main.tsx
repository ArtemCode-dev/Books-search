import React from "react"
// import { NavLink } from "react-router-dom";
import { useAppDispatch, useTypedSelector } from "src/hooks/store";
import s from '../styles/Main.module.scss';
import Card from "../components/Card";
import Button from "../components/shared/Button";
import Container from "../components/shared/Container";
// import Input from "./shared/Input";
// import Select from "./shared/Select";
import Text from "../components/shared/Text";
import { addBooks } from "src/store/thunks/fetchBooks";


const Main:React.FC = () => {
    const {books, totalItems} = useTypedSelector((state) => state.books);
    const dispatch = useAppDispatch();
    const requestData = useTypedSelector((state) => state.books.request);
    const data = {...requestData, startIndex : "30"}

    function moreResults() {
        dispatch(addBooks(data))
    }

    return (
        <div className={s.main}>
            <div className={s.main__body}>
                <Container>
                    <div className={s.main__body__total_items}><Text type={'h2'}>{totalItems}</Text></div>
                    <div className={s.main__body__books}>
                        {books && books.map((item) => (
                            <div className={s.main__body__books__card}>
                                <Card props = {item.volumeInfo} id={item.id}/>
                            </div>
                        ))}
                    </div>
                    <div className={s.main__body__more_results}>
                        <Button func={()=>moreResults()} type={'primary'}>Еще</Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Main