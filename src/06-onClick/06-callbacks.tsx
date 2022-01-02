import React from "react";

/*const callback = () => {
    alert("hey")
}
window.setTimeout(callback, 1000)*/

export const User = () => {

    const deleteUser = () => {
        alert("user have be deleted")
    }

    const saveUser = () => {
        alert("user shave be saved")
    }

    return <div>Dimych
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}
