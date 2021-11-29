const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/Nakuri");
};

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

const Company = mongoose.model("company", companySchema);

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.objectId,
      ref: "company",
      required: true,
    },
    city:{type:String, required: true},
    vacancy:{type: Number, required: true },
    notice_period:{type: boolean, required: true},
    
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

app.listen(1234, async (req, res) => {
  await connect();
  console.log("Listening on port 1234");
});
