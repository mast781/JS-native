import {makeHairstyle, moveUser, upgradeLaptop, UserType, UserWithLaptopType} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const movedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Kiev")

})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "Zenbook"
        }
    }

    const userWithUpgradedLaptop = upgradeLaptop(user, "Macbook")

    expect(user).not.toBe(userWithUpgradedLaptop)
    expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop)
    expect(user.address).toBe(userWithUpgradedLaptop.address)
    expect(userWithUpgradedLaptop.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Zenbook")

})