const mongoose = require('mongoose');
const { Schema } = mongoose;

const waitListSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Can not accept duplicate emails'],
      required: [true, 'Email address is required'],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Enter valid email address'],
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

waitListSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    delete ret._id;
  },
});

module.exports = mongoose.model('wait_list', waitListSchema);
