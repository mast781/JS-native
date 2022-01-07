import {usersObj} from "./08_01";


beforeEach( () => {

})



test("should select corresponding user from obj", () => {
    expect(usersObj[0]).toBe("Dimych")
    expect(usersObj[1]).toBe("Natasha")
    expect(usersObj[2]).toBe("Valera")
    expect(usersObj[3]).toBe("Katya")
})