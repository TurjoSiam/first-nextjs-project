

const PostDetails = async ({params}) => {

    const postId = (await params).id;

    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const post = await data.json();
    
    return (
        <div className="w-8/12 mx-auto my-10">
            <div className="rounded-2xl p-7 bg-yellow-50 border border-orange-300 text-center space-y-5">
                <h2 className="text-3xl font-bold text-red-600">{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetails;