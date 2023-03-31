import React from "react"
import s from '../../../src/styles/shared/Container.module.scss';

interface IContainer {
    children: React.ReactNode;
}

const Container:React.FC <IContainer>= ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    )    
}

export default Container