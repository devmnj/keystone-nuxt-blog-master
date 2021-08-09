const { Text,Relationship } = require('@keystonejs/fields');

const tagFields = {
  fields: {
    name: { type: Text },
    // posts: {
    //   type:Relationship,ref:'Post',many:true
    // }
  }
};

module.exports = tagFields;
