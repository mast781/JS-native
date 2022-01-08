import {UserType} from "./10_01";

function increaseAge(u: UserType) {
    u.hair = u.hair + 1
}

test('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            title: "Minsk"
        }
    }

    increaseAge(user)

    expect(user.hair).toBe(33)
})