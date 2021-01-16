import mongoose from 'mongoose';
import postMessage from '../models/postMessage.js';


export const getPosts = async(req,res) => {
    try{
        const postMessages = await postMessage.find();
       
        return res.json(postMessages)

    } catch (error) {
       
        return res.json({message: error.message });
        
    }

}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
   
    try{
        await newPost.save();
        return res.json(newPost)
    }catch(error){
        
        return res.json({message: error.message });
    }
}

export const updatePost = async(req,res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
        res.send('no post found');
    
    const updatedPost =  await postMessage.findByIdAndUpdate(_id,post,{new: true});
    res.json(updatedPost);
}