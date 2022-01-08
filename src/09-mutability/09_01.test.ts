export type UserType = {
    name: string
    age: number
    address: { title: string }
}

function increaseAge(u: UserType) {
    u.age++
}

test('big reference type test', () => {

    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: {
            title: "Minsk"
        }
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

test('reference type test', () => {
    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: address
    }

    // let addr = user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    address.title = "Minsk City"

    expect(user.address.title).toBe("Minsk City")
    expect(user.address).toEqual(user2.address)

})

test('reference type array test', () => {
    const address = {
        title: "Minsk"
    }

    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Misha", age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")

})

test("sort array test", () => {

    const letters = ["c", "d", "a", "z", "e"]

    passportist(letters)

    expect(letters).toEqual(["c", "d", "a", "z", "e"])
})

function passportist(letters: any) {
    const copy = [...letters].sort()
    console.log(copy)
}