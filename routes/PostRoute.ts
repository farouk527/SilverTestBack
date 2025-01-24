const router = require("express").Router();
import { createPostController, getAllPostsControllers, deletePostController, updatePostController } from "../controllers/postController";
import { verifyToken } from "../middlewares/verifyToken";
import validateObjectId from "../middlewares/validateObjectId";


router.post("/createPost",verifyToken,createPostController);
router.get("/getposts",verifyToken,getAllPostsControllers);
router.delete("/delete/:id",verifyToken,validateObjectId,deletePostController);
router.put("/update/:id",verifyToken,validateObjectId,updatePostController);

module.exports = router ; 
