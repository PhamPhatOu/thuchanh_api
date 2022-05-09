import axios from "axios"

export let endpoints = {
    "uses":"/users/",
    "posts":"/posts/"
}

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})