import mongoose from "mongoose";

function connect(DBURL) {
  mongoose
    .connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

export default { connect };
