import React from 'react'
import HelloWorld from "../Components/HelloWorld";

export default function Home() {
    return (
        <div>
            <HelloWorld name="Tinnakorn" />
            <h1 className="font-bold text-2xl"> This is Home Page </h1>
        </div>
    )
}