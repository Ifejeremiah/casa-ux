const { DB } = require('../config');

module.exports.create = async function (student) {
    const { email_address } = student;
    const exists = await DB.Student.findOne({ email_address });
    if (exists) throw 'Applicant already registered';
    await DB.Student.create(student);
};

module.exports.findAll = async function () {
    return DB.Student.find();
};
