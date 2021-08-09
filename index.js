const dotenv = require('dotenv').config()
const { NuxtApp } = require('@keystonejs/app-nuxt');
const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const keystone = new Keystone({
  adapter: new MongooseAdapter({ mongoUri: 'mongodb://localhost/keystone' }),
});
const PostSchema = require("./lists/Post");
const UserSchema = require("./lists/User");
const TagSchema = require("./lists/Tag")
const CategorySchema = require("./lists/Category")
const SiteIdentity = require('./lists/SiteIdentity')
const CommentSchema = require('./lists/Comment')
keystone.createList('User', UserSchema);
keystone.createList('SiteIdentity',SiteIdentity);
keystone.createList('Tag', TagSchema);
keystone.createList('Category', CategorySchema);
keystone.createList('Post', PostSchema);
keystone.createList('Comment',CommentSchema);
const config= require("./nuxt.config");

//  const config = {
//    srcDir: 'src/',
//    buildDir: 'dist',
//    env:{
//      URI:process.env.API
//    },
//    router:{
//      middleware:'Identity'
//    },
//     buildModules:['@nuxtjs/tailwindcss'],       
//    components:true
   
//  };

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp(), new NuxtApp(config)],
};
