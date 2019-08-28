import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter();
  const { name } = router.query;
  return <p>My name is : {name}</p>
}

export default Post;