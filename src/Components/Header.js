import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <div>
            <header className="border-b p-3 flex justify-between items-center">
                <span className="font-bold"> AppName </span> 
                <Navigation />
            </header>
        </div>
    )
}
