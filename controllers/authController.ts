import { User, validateRegisterUser, validateLoginUser } from '../models/user';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';


/*****
 * @desc Register New User
 * @route /api/auth/register
 * @method post
 * @access public
 */
export const registerUserController = asyncHandler(
  async (req: any, res: any): Promise<any> => {
    const { error } = validateRegisterUser(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).json({ message: 'You registered successfully, please log in' });
  }
);

/****
 * @desc Login user
 * @route /api/auth/login
 * @method post
 * @access public
 */
export const loginUserController = asyncHandler(
  async (req: any, res: any): Promise<any> => {
    const { error } = validateLoginUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    return res.status(200).json({
      _id: user._id,
      token,
    });
  }
);
