import mongoose, { Document, Schema } from 'mongoose';
import Joi, { ObjectSchema } from 'joi';
import jwt from 'jsonwebtoken';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isAccountVerified: boolean;
  generateAuthToken(): string;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },

    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = function (): string {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET as string);
};

function validateRegisterUser(obj: { username: string; email: string; password: string }) {
  const schema: ObjectSchema = Joi.object({
    username: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(obj);
}

function validateLoginUser(obj: { email: string; password: string }) {
  const schema: ObjectSchema = Joi.object({
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });

  return schema.validate(obj);
}

const User = mongoose.model<IUser>('User', UserSchema);

export { User, validateRegisterUser, validateLoginUser };
