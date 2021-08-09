import gqlClient from "~/lib/gqlClient";
const GET_POSTS = `
query  {
allPosts
{
  
  title,
  summary,
  content ,
  slug,
  author{
    name
  },
  tags{
    name
  },
  categories{
    name
  }
}
}
`;
export default async function (context) {
  const { data } = await gqlClient(GET_POSTS);
  context.store.commit("blog/setPosts",data.allPosts); 
  
}
