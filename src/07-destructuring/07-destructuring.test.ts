type LessonType = {
    title: string
}


type ManType = {
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

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons:[{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})


test("1", () => {
    //const age = props.age;
    //const lessons = props.lessons

    const {age,lessons} = props // аналогично записи выше
    const {title} = props.address.street

    // const title = props.address.street.title

    //const a = props.age;
    //const l = props.lessons

    const {age: a, lessons: l} = props // аналогично записи выше, но лучше псевдонимы не юзать


    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(a).toBe(32)
    expect(l.length).toBe(2)
    expect(title).toBe("Nezavisimosti street")
})

test("2", () => {

})