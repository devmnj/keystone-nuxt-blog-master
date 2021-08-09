const { Select,Slug, Text,Relationship } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');
const { atTracking } = require('@keystonejs/list-plugins');
  const { Content } = require('@keystonejs/fields-content');
const postFields = {
  fields: {
    title: { type: Text, isRequired: true },
    summary:{ type: Text},
    slug: { type: Slug, from: "title" },
    content: { type: Markdown 
    
    },
    author: { type: Relationship, ref: 'User', many: false ,isRequired:true},
    status: {
      type: Select, options: [
        { value: 'PUB', label: 'Published' },
        { value: 'UN_PUB', label: 'Unpublished' }
      ]
    },
    categories: { type:Relationship,many:true,ref:'Category'},
    tags: { type:Relationship ,many:true,ref:'Tag'}

  },
  plugins: [
    atTracking(),
  ],
};

module.exports = postFields;

