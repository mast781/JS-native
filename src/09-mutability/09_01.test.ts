type UserType = {
    name: string
    age: number
}

function increaseAge(u: UserType) {
    u.age++
}

test('big reference type test', () => {

    let user: UserType = {
        name: "Dimych",
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(user.age).toBe(1000)

})

test('array reference test', () => {

    let users = [
        {
            name: "Dimych",
            age: 32
        },
        {
            name: "Dimych",
            age: 32
        }
    ]

    let admins = users

    admins.push({name: "Bandyugan", age: 10})


    expect(users[2]).toEqual({name: "Bandyugan", age: 10})
})

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = usersCount

    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)
})