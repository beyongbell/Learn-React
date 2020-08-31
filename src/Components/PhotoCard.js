import React from 'react'
import { Link } from 'react-router-dom'

export default function PhotoCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/photo/${props.photo.id}`}>
                <div style={{'backgroundImage' : `url('${props.photo.thumbnailUrl}')`}} className="w-full h-64 bg-blue bg-cover"></div>
            </Link>
            {props.photo.title}
        </div>
    )
}
