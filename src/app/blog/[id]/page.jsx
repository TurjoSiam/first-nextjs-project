

const PostDetails = async ({params}) => {

    const postId = (await params).id;

    const data = await fetch(`http://localhost:3000/post/${postId}`)
    const post = await data.json();
    
    return (
        <div>
            <h2>the post</h2>
        </div>
    );
};

export default PostDetails;