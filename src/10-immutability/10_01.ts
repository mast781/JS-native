export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    /*const copy = {
        ...u,
        address : {
            ...u.address,
            city: city
        }
    }*/
    /*copy.address = {
        ...copy.address,
        city: city
    }*/

    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function upgradeLaptop(u: UserWithLaptopType, modelLaptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: modelLaptop
        }
    }
}