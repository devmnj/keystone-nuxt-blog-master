  import  gqlClient  from "../lib/gqlClient";

  const IDENTITY = `
    query  {
     allSiteIdentities{
      title
    }
  }
  `;
export default async function (context) {
       console.log('Looking for identity');
      if (context.store.state.SiteConfig.isLoaded === false) {
          const { data } = await gqlClient(IDENTITY);
           // console.log(data);
         context.store.commit('SiteConfig/setIdentity',  data.allSiteIdentities[0] )
         context.store.commit('SiteConfig/setLoaded', true)
  
      }
  }
  