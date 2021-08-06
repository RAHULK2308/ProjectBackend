const mongoose = require("mongoose");
mongoose
  .connect(
    // 'mongodb://Rahulk:rahulk2308@cluster0-shard-00-00.k8mnb.mongodb.net:27017,cluster0-shard-00-01.k8mnb.mongodb.net:27017,cluster0-shard-00-02.k8mnb.mongodb.net:27017/Project?ssl=true&replicaSet=atlas-8otjwe-shard-0&authSource=admin&retryWrites=true&w=majority'
    'mongodb://localhost:27017/Project'
    )
  .then(() => console.log("MongoDB connected.>UserDetails"));

const Schema = mongoose.Schema;
const UserDetailsSchema = new Schema({
  name:String,
  image: String,
  address: String,
  summary:String,
  phonenumber: Number,
  email:String,
  pincode:Number,
  city:String,
  Certificatetitle:Array,
  Certificateyear: Array,
  qualification: Array,
  institution: Array,
  coursestartdate: Array,
  courseenddate: Array,
  yearofcompletion: Array,
  course: Array,
  
  title: Array,
  companyname: Array,
  companyaddress: Array,
  startdate: Array,
  enddate: Array,
  keyresponsibilities: Array,
  achivements: Array,
  references: Array,
  interest: Array,
  languagename: Array,
  proficiency: Array,
  projectname: Array,
  projectdescription: Array,
  skill: Array,
  fieldname:String,
  fieldinput:String
});

var UserDetailsData = mongoose.model("userdetailsdata", UserDetailsSchema);
module.exports = UserDetailsData;
