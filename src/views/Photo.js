import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

export default function Photo() {
    const { id } = useParams()
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const [photo, setPhoto] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setPhoto({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(response => {
            setPhoto({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setPhoto({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    if (photo.error) {
        content =
        <p>
         There was an error please refresh or try again later!
        </p>
    }

    if (photo.loading) {
        content = <Loader />
    }

    if (photo.data) {
        content =
        <div>
            <h1> Photo : {photo.data.title}</h1>
            <br/>
            <img src={photo.data.thumbnailUrl} alt=""/>
        </div>
    }

    return (<div> { content }</div>)
}
