import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

export default function Todo() {
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const [todo, setTodo] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setTodo({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(response => {
            setTodo({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setTodo({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    if (todo.error) {
        content =
        <p>
         There was an error please refresh or try again later!
        </p>
    }

    if (todo.loading) {
        content = <Loader />
    }

    if (todo.data) {
        content =
        <div>
            <h1> Todo : {todo.data.title}</h1>
        </div>
    }

    return (<div> { content }</div>)
}
