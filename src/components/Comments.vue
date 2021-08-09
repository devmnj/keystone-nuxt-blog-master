<template>
  <div class="">
    <div class="p-5 mb-2">
      <form class="flex flex-col mb-2" @submit.prevent="handleSubmit">
       <div class="flex flex-col">
        <label>Name</label>
        <input
          v-model="comment.name"
          class="bg-yellow-200"
          type="text"
          name="name"
          id="name"
        />

        <label>Email</label>
        <input
          v-model="comment.email"
          class="bg-yellow-200"
          type="text"
          name="email"
          id="email"
        />
        <label>Comment</label>
        <textarea
          class="bg-yellow-200"
          v-model="comment.content"
          name="comment"
          id="comment"
          cols="30"
          rows="3"
        ></textarea>
</div>
        <button
          type="submit"
          class="bg-green-500 mt-3 place-self-start  rounded-sm px-3 font-semibold"
        >
          Post
        </button>
        
      </form>

      <!-- <button class="bg-green-500 p- rounded-sm px-3 font-semibold">
        Reset
      </button> -->
      <div class="bg-purple-200"></div>
    </div>
  </div>
</template>
<script>
import gqlClient from "../lib/gqlClient";
export default {
  props: {
    pid: {
      type: String,
    },
  },
  data() {
    return {
      comment: {
        email: "",
        name: "",
        content: "",
        postId: this.pid,
      },
    };
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      const COMMENT = `
       mutation  postComment($comment:String,$name:String,$email:String,$postId:String){
  createComment(data: {    
    content:$comment
    name:$name,
    email:$email,
    postId:$postId
  
    }){
    id
  }
}
`;

      if (this.comment.content) {
        await gqlClient(COMMENT, {
          comment: this.comment.content,
          name: this.comment.name,
          email: this.comment.email,
          postId: this.comment.postId,
        });

        //    alert("Comment Saved");
        this.comment.content = "";
        this.comment.name = "";
        this.comment.email = "";
      }
      // Send data to the server or update your stores and such.
    },
  },
};
</script>
