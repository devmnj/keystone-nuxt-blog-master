<template>
    <div class="mt-4 w-auto  bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-lg leading-7 font-semibold">
         {{postData.title}} 
        </h2>
        <p class="mt-3 text-gray-600">
           {{postData.summary}}
        </p>
        <p class="text-gray-800  border-dashed">
          <!-- {{postData.content}} -->
          <!-- To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun! -->
        </p>
      </div>
</template>

<script>
export default {
  props: {
    postData:{
      type :Object
    }
  },

  data() {
    return {
      posts:[]
    }
  },

}
</script>