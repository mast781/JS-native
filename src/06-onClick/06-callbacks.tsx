import React, {ChangeEvent, MouseEvent} from "react";


/*const callback = () => {
    alert("hey")
}
window.setTimeout(callback, 1000)*/

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert("user shave be saved")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button name="delete" onClick={search}>search</button>
    </div>
}
