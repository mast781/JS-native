import {users} from "./08_01.test";

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}


// users[1]

let user = {id: 100500, name: 'Igor'}
users[user.id] = user // добавление (если юзер с таким id уже есть, то работает, как обновление)
delete users[user.id] // удаление
users[user.id].name = "Vitya" // обновление


export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]

//usersArray.find(u => u.id === 1)
//var usersCopy = [...usersArray.filter(),user] //добавление в массив
//var usersArray = userArray.filter(u => u.id !== user.id) //удаление из массива
