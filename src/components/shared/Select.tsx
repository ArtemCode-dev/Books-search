import React from "react"
import s from '../../styles/shared/Select.module.scss';

interface ISelect {
    children: React.ReactNode;
    value: string;
    onChange: (value:string)=> void;
}

const Select:React.FC <ISelect>= ({children, value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className={s.select}>
            {children}
        </select>
    )    
}

export default Select