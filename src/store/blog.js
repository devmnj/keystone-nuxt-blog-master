

export const state = () =>  ({
  bposts: [],
  currentPost:Object
   
} );
 

export const mutations = {
  setPosts(state, values) {
    
    state.bposts =values
    //  console.log('Fetched Posts');
        //  console.log(state.bposts); 
  },
  setCurrentPost(state, values) {
    
    state.currentPost =values
; 
  }
 
};
