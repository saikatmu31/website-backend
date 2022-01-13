const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

exports.connect = () => {
    mongoose
        .connect(MONGODB_URI, {
            useNewUrlparser: true,
            useUnifiedTopology: true,
        })
        .then(console.log(`DB Connection Success`))
        .catch((err) => {
            console.log(`DB Connection Failed`);
            console.log(err);
            prcess.exit(1);
        });
};