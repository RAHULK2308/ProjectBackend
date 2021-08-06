const mongoose = require("mongoose");
mongoose
  .connect(
    // 'mongodb://Rahulk:rahulk2308@cluster0-shard-00-00.k8mnb.mongodb.net:27017,cluster0-shard-00-01.k8mnb.mongodb.net:27017,cluster0-shard-00-02.k8mnb.mongodb.net:27017/Project?ssl=true&replicaSet=atlas-8otjwe-shard-0&authSource=admin&retryWrites=true&w=majority'
    'mongodb://localhost:27017/Project'
    )
  .then(() => console.log("MongoDB connected.>Credential"));

const Schema = mongoose.Schema;
const CredentialSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
 
});

var Credentialdata = mongoose.model("credentialdata", CredentialSchema);
module.exports = Credentialdata;
