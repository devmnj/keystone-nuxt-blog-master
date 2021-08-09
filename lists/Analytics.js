const { atTracking } = require('@keystonejs/list-plugins');
const { Integer, Relationship } = require('@keystonejs/fields');

const analyticsFields = {
  fields: {
    pageId: { type: Relationship, ref: 'Post', many: false },
    hit: { type: Integer, required: true, default: 0 },
    location: { type: Tex },
  },
  plugins: [
    atTracking()
  ]
};

module.exports = analyticsFields;
