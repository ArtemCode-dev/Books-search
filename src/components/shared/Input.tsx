import React from "react"
import s from '../../styles/shared/Input.module.scss';
import searchSvg from '../../assets/svg/icons8-search.svg'
import { NavLink } from "react-router-dom";

interface IInput {
    type: string;
    onClick?: () => void;
    value: string;
    onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e:React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input:React.FC <IInput>= ({type, onClick, value, onChange, onKeyDown}) => {
    switch(type){
        case 'input_search':
            return (
                <div className={s.input_search}>
                    <input value={value} onChange={onChange}  type='text' onKeyDown={onKeyDown}/>
                    <NavLink to={'/'}><img onClick={onClick} src={searchSvg} alt='search'/></NavLink>
                </div>
            )
        default :
        return (
            <input type='text' className={s.text_input}>
                
            </input>
        )
    }
}

export default Input