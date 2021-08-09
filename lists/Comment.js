const {Text,Relationship } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');
const { atTracking } = require('@keystonejs/list-plugins');

const commentFields= {
  fields:{
    postId :{type:Text},
    name:{type:Text},
    email:{type:Text},
    content:{type:Markdown}
  },
  plugins: [
    atTracking(),
  ]
}

module.exports=commentFields;
