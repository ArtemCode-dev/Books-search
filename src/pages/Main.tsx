import React from "react"
// import { NavLink } from "react-router-dom";
import { useTypedSelector } from "src/hooks/store";
import s from '../styles/Main.module.scss';
import Card from "../components/Card";
import Button from "../components/shared/Button";
import Container from "../components/shared/Container";
// import Input from "./shared/Input";
// import Select from "./shared/Select";
import Text from "../components/shared/Text";


const Main:React.FC = () => {
    const {books, totalItems} = useTypedSelector((state) => state.books);

    function moreResults() {

    }

    return (
        <div className={s.main}>
            <div className={s.main__body}>
                <Container>
                    <div className={s.main__body__total_items}><Text type={'h2'}>{totalItems}</Text></div>
                    <div className={s.main__body__books}>
                        {books.map((item) => (
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