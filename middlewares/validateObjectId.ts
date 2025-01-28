import mongoose from 'mongoose';

//function to check the objectid validation
const validateObjectId = (req: any, res: any, next: any): any => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  next();
};

export default validateObjectId;
