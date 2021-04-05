import axios from "../utils/axios"

export const addTodo = (todo) => {
    return new Promise((resolve, reject) => {
        axios({ url: "todos", method: "POST", data: todo })
            .then((response) => {
                resolve(response)
            })
            .catch(e => {

                reject(e)
            })
    })
}

export const updateTodo = (todo) => {
    return new Promise((resolve, reject) => {
        axios({ url: "todos/update", method: "POST", data: todo })
            .then((response) => {
                resolve(response)
            })
            .catch(e => {

                reject(e)
            })
    })
}


export const getTodos = () => {
    return new Promise((resolve, reject) => {
        axios({ url: "todos", method: "GET" })
            .then((response) => {
                resolve(response)
            })
            .catch(e => {

                reject(e)
            })
    })
}

export const deleteTodo = (todoId) => {
    return new Promise((resolve, reject) => {
        axios({ url: "todos/delete", method: "POST", data: { id: todoId } })
            .then((response) => {
                resolve(response)
            })
            .catch(e => {

                reject(e)
            })
    })
}