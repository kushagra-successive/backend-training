const Documents = require("./models/schema");
const admin = {
  email: "shivaye029@gmail.com",
  password: "UmaShankar029",
  role: "admin",
};
const seedAdmin = async () => {
  const userExist = await Documents.findOne({ email: admin.email });
  if (!userExist) {
    const newDocument = new Documents(admin);
    await newDocument.save();
  }
};
module.exports = seedAdmin;
