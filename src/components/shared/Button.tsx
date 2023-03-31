import React from "react"
import s from '../../styles/shared/Button.module.scss';

interface IButton {
    children: React.ReactNode;
    type: string;
    func: ()=>void;
}

const Button:React.FC <IButton>= ({type, children, func}) => {
    switch(type){
        case 'primary':
            return (
                <button onClick={func} className={s.primary}>
                    {children}
                </button>
            )
        default :
            return (
                <button onClick={func} className={s.primary}>
                    {children}
                </button>
            )    
    }
}

export default Button