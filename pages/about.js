import { useEffect } from 'react'

const About = () => {
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