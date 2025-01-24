import Posts from "@/components/Posts";


const Home = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json();

  return (
    <div className="my-10 mx-auto w-10/12">
      <h2 className="text-3xl text-center font-bold">All Posts</h2>
      <Posts posts= {posts}></Posts>
    </div>
  );
};

export default Home;