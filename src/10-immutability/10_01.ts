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

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = {
    companies: Array<CompanyType>
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

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
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

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [
            ...u.books.concat(newBooks)
        ]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map( b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {
        ...u,
        books: u.books.filter( b => b !== removedBook)
    }
}

export function updateCompanyTitle(u: WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map( c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}