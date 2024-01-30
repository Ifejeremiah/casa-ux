const mongoose = require('mongoose');
const { Schema } = mongoose;
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const studentSchema = new Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email_address: {
      type: String,
      unique: [true, 'Can not accept duplicate emails'],
      required: [true, 'Email address is required'],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Enter valid email address'],
      trim: true,
      lowercase: true,
    },
    residential_address: {
      type: String,
      required: [true, 'Residential Address is required'],
      trim: true,
    },
    level_of_proficiency: {
      type: String,
      required: [true, 'Level of proficiency is required'],
      enum: ['beginner', 'intermediate', 'advanced'],
    },
      education_status: {
      type: String,
      required: [true, 'Education status is required'],
    },
  },
  { timestamps: true }
);

studentSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    delete ret._id;
  },
});

studentSchema.plugin(aggregatePaginate);


module.exports = mongoose.model('students', studentSchema);
