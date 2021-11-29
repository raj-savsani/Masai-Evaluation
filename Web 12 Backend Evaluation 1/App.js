const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/Nakuri");
};

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true},
    details: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Company = mongoose.model("company", companySchema);

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    skill: { type: String, required: true},
    city: { type: String, required: true },
    vacancy: { type: Number, required: true },
    notice_period: { type: String, required: true },
    work_from_home: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Job = mongoose.model("job", jobSchema);

app.post('/company', async (req, res) => {
    try{
        const company = await Company.create(req.body);
        res.status(201).send(company);
    }catch(e){
        res.status(500).send({message:e.message})
    }
});


// app.post('/job', async (req, res) => {
//     try{
//         const job = await Job.create(req.body);
//         res.status(201).send(job);
//     }catch(e){
//         res.status(500).send({message:e.message})
//     }
// });



app.listen(1234, async (req, res) => {
  await connect();
  console.log("Listening on port 1234");
});
