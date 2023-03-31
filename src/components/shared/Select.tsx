import React from "react"
import s from '../../styles/shared/Select.module.scss';

interface ISelect {
    children: React.ReactNode;
}

const Select:React.FC <ISelect>= ({children}) => {
    return (
        <select className={s.select}>
            {children}
        </select>
    )    
}

export default Select