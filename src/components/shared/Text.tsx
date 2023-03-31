import React from "react"
import s from '../../styles/shared/Text.module.scss';

interface IText {
    children: React.ReactNode;
    type: string;
    isBlack?: boolean;
}

const Text:React.FC <IText>= ({type, children, isBlack}) => {
    const className = `${isBlack && s.black}`;

    switch(type){
        case 'h1':
            return (
                <h1 className={s.h1 + ' ' + className}>
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2 className={s.h2 + ' ' + className}>
                    {children}
                </h2>
            )
        case 'p':
            return (
                <p className={s.p + ' ' + className}>
                    {children}
                </p>
            )
        default :
            return (
                <h1 className={s.h1 + ' ' + className}>
                    {children}
                </h1>
            )    
    }
}

export default Text