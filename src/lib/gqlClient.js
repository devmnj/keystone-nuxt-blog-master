
function gqlClient(query, variables = {}) {
  return fetch("http://localhost:3000/admin/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function (result) {
    // console.log(result);
    return result.json();
  }).catch(err=>{
    console.log('got some error');
    console.log(err);
  });
}
 
export default gqlClient;
