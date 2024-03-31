"use client"
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from './ui/button';

export const Toggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    })

    if (!mounted) {
        return <Button variant="secondary" size="icon" disabled={true}></Button>
    }

    const dark = theme === "dark"

    return (
        <Button variant="secondary" size="icon" onClick={() => setTheme(`${dark ? "light" : "dark"}`)} className=' items-end justify-end md:items-center md:justify-center sm:justify-center sm:items-center lg:justify-end lg:items-end '>
            {dark ? (<Sun className='hover:cursor-pointer' />) : (<Moon />)}
        </Button>
    )
}

