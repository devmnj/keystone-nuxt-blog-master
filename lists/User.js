const { Select, Text, Password } = require('@keystonejs/fields');

const userFields = {
  fields: {
    name: { type: Text, isRequired: true},
    email: { type: Text },
    password: { type: Password, isRequired: true },
    role: { type: Select, options: "Admin,Author" },
    // posts: {type:Relationship,ref:'Post',many: true}
  }
}

module.exports = userFields;
