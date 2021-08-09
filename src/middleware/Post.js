import gqlClient from "~/lib/gqlClient";

export default async function (context) {
  const slug = context.params.slug;

  const GET_POST = `
query  {
  allPosts(where:{slug_in:"${slug}"})
{
  id,
  title,
  summary,
  content  ,
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
  const post = context.store.state.blog.bposts.filter((p) => {
    p.slug === slug;
  });
 
    const { data } = await gqlClient(GET_POST);
    context.store.commit("blog/setCurrentPost", data.allPosts[0]);
   
}
