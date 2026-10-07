import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutMeHome from '../../components/home/AboutMeHome'
import Work from '../../components/home/Work'
import Stack from '../../components/home/Stack'

const HomePage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Hero />
            <AboutMeHome />
            <Work />
            <Stack />
        </div>
    )
}

export default HomePage
