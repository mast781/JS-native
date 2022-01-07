import React from "react";

type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    // lessons: Array<{title:string}> аналогично записи выше, иногда позволительно, но лучше выносить в отдельный тип
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

// export const ManComponent: React.FC<PropsType> = (props) => { // можно сделать деструктуризацию в параметрах функции напрямую

// export const ManComponent: React.FC<PropsType> = ({title, man, car,food}) => {
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => { // это означает создать переменные для title и man, а остальные запихать в props
    // const {title} = props
    // const {name} = props.man
    /// const {title, man: {name}} = props // аналогично записи выше, но лучше исплользовать отдельно
    // const {title, man} = props // можно передать в переменную объект и образаться к немуб как показано ниже в div


    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name/*{name}*/}
        </div>
    </div>
}