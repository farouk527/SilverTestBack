import mongoose, { Document, Schema , Types} from "mongoose";
import Joi from "joi";

//interface for Post modal
interface IPost extends Document {
  title: string;
  description: string;
  category: string;
  user: {
    id: Types.ObjectId; 
  };
}

// creating the new schema in the data base using the defined interface and mongoose
const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 200,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId, 
      ref: 'User', 
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model<IPost>("Post", PostSchema);


//function to validate the required inputs
function validateCreatePost(obj: any) {
  const schema = Joi.object({
    title: Joi.string().trim().min(2).max(200).required(),
    description: Joi.string().trim().min(2).required(),
    category: Joi.string().trim().required()
  });
  return schema.validate(obj);
}

//function for the validation in the moment of update
function validateUpdatePost(obj: any) {
  const schema = Joi.object({
    title: Joi.string().trim().min(2).max(200),
    description: Joi.string().trim().min(2),
    category: Joi.string().trim()
  });
  return schema.validate(obj);
}

export { Post, validateCreatePost, validateUpdatePost };
