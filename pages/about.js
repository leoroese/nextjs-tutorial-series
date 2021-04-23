import { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        throw new Error('You really broked it')
    })
    return (
        <>
            <h1>Yo its me</h1>
        </>
    )
}

export const getStaticProps = (context) => {
    return { 
        props: {},
        revalidate: 10 
    }
}

export default About;