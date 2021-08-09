<template>
  <div class="m-5 items-center justify-center min-h-screen">
    <div>
      <div class="bg-green-800 w-full">
        <h1 class="text-center text-lg px-10 font-black text-white">
          {{ post.title }}
        </h1>

        <div
          class="text-center pb-1 italic text-1xl font-semibold text-italic text-yellow-500"
        >
          {{ post.author }}
        </div>
        <div
          class="text-center text-lg pb-0 text-yellow-100 font-semibold italic"
        >
          {{ post.summary }}
        </div>
        <div>
          <div
            class="flex justify-center"
            v-for="category in post.categories"
            :key="category.id"
          >
            <span class="text-yellow-500 font-semibold text-lg"
              >{{ category.name }} /
            </span>
          </div>
        </div>
        <div class="bg-gray-400 rounded-sm py-4 px-5">
           <vue-markdown :source="md" :show="true"></vue-markdown>
          
 
        </div>
      </div>

      <div class="opacity-100 bg-pink-300">
        <span class="text-pink-800 font-semibold text-sm pl-2">Tags :-</span>
        <span v-for="tag in post.tags" :key="tag.id">
          <span class="text-black font-semibold text-sm pl-2">{{
            tag.name
          }}</span>
        </span>
      </div>
      <div class="mx-16 mt-2 rounded-sm bg-purple-100 px-16">
        <Comments :pid="post.id" />
      </div>
    </div>
  </div>
</template>

<script>
 import VueMarkdown from 'vue-markdown'

export default {
  components: {
 VueMarkdown
  },
  data() {
    return {
    };
  },
  computed: {
     md() {
       return this.post.content;
     },
  },
  props: {
    post: {
      type: {},
    },
  },
};
</script>
