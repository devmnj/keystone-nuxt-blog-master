export const state=()=>({
    identity:Object,
    isLoaded:false,
})

export const mutations  ={
    setIdentity(state,value){
      state.identity= value;
    },
    setLoaded(state,value){
        state.isLoaded=value;
    }
}