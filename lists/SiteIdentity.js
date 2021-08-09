const { Select, Text } = require("@keystonejs/fields");

const siteIdentity = {
  fields: {
    title: { type: Text, isRequired: true },
    tag_line: { type: Text },
    logo_url: { type: Text },
    link1: { type: Text },
    link2: { type: Text },
  },
};
module.exports = siteIdentity;
