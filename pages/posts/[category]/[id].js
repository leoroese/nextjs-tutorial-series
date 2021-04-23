const PostPage = () => {
  return <h1>I am a post!</h1>
}

export const getStaticPaths = () => {
  return {
      paths: [
        { params: { category: 'tech', id: '1' } },
        { params: { category: 'whales', id: '2' } }
      ],
      fallback: false
    }
}

export const getStaticProps = (context) => {
  return { props: {} }
}

export default PostPage