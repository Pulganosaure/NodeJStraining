const keys = {
  mongo: {
    url : function() {
      return process.env.MONGO_URI
    },
    options : {
      useNewUrlParser: true,
    },
  },
}
console.log("prod")
exports.keys = keys
