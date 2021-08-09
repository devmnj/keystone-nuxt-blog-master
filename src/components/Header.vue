<template>
  <header data-fetch-key="1" class="relative w-full mx-auto bg-white px-8">
    <nav>
    <nuxt-link to="/">
      <div class="flex flex-col-2">
      
        <h1 class="text-purple-800 text-xl pl-5 pb-2 font-black">{{title}}</h1>
     
      </div>
      </nuxt-link>
    </nav>
  </header>
</template>
<script>
 

export default {
  data() {
    return {
      title:undefined
    }
  },
  mounted() {
      this.title= this.$store.state.SiteConfig.identity.title;
    console.log('mounted');
  },
   
};
</script>
