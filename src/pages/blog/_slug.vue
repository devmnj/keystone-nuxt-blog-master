<template>
  <div class="flex-grow">   
    <div class="bg-purple-100">
      <div class="px-16   rounded-3    ">
        <div class="mx-16 mt-0  rounded    bg-gray-700 border-1  pb-2 ">
          <FullPost :post="post" />
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
// import FullPost from "~/components/FullPost";
export default {
  layout: "default",
  middleware: "Post",
  components: {  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    this.post = this.$store.state.blog.currentPost;
  },
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
};
</script>
