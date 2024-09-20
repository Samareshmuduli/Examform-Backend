exports.getUserPost = async (req, res) => {

    // console.log("req",req.params)
    try {
        const post = await Post.find({author:req.params.id});
        if (post==[]) return res.status(404).json({ message: 'Posts are not found' }); 
        // console.log(post)

        res.status(200).json({
            message: "Posts retrieved successfully",
            payload: post
        });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};