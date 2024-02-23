const { DB } = require('../config');

module.exports.create = async function (subscriber) {
  const { email } = subscriber;
  const exists = await DB.WaitList.findOne({ email });
  if (exists) throw 'Subscriber is already subscribed';
  await DB.WaitList.create(subscriber);
};

module.exports.findAll = async function () {
  return DB.WaitList.find();
};
