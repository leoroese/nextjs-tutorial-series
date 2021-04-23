import Error from 'next/error'

const Sup = ({errorCode, message}) => {
    if (errorCode){
       return <Error statusCode={errorCode} title={message} />
    }
    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export const getServerSideProps = (context) => {
    try {
        return { props: { message: 'supppppppppppp' },
            // notFound: object ? false : true,
            // redirect: {
            //     destination: '/',
            //     permanent: true
            // }
        }
    } catch (error) {
        return { props: { errorCode: 403, message: 'broken'} }
    }
    
}

export default Sup;