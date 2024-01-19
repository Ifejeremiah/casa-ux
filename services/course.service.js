const { DB } = require('../config');

module.exports.register = async function (applicant) {
  const { email_address } = applicant;
  const exists = await DB.Course.Applicants.findOne({ email_address });
  if (exists) throw 'Applicant already registered';
  await DB.Course.Applicants.create(applicant);
};
