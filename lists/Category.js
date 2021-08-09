const { Text,Relationship } = require('@keystonejs/fields');

const categoryFields = {
  fields: {
    name: { type: Text },
    // posts: {
    //   type:Relationship,ref:'Post',many:true
    // }
  }
};

module.exports = categoryFields;
