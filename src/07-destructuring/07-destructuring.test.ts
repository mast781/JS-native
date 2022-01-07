import {ManType} from "./destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons:[{title: "1"}, {title: "2"}, {title: "3"}],
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
    expect(lessons.length).toBe(3)

    expect(a).toBe(32)
    expect(l.length).toBe(3)
    expect(title).toBe("Nezavisimosti street")
})

test("2", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // const [ls1, ls2] = props.lessons // аналогично записи выше, но количество переменных должно соответствовать количеству элементов массива
    // const [,ls2] = props.lessons // если нужен не первый элемент, то оставляем запятую
    // const [ls1, ...restLessons] = props.lessons // берется первый элемент, остальные пихаются в массив restLessons
    const [, ls2, ...restLessons] = props.lessons // первый пропускается, берется второй элемент, третий пихается в массив restLessons
    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    // expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")
})