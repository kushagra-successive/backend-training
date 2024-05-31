import { useEffect, useMemo, useState } from "react";
import AllPostCard from "../components/AllPostCard";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [postDetail, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const { _id } = useMemo(() => JSON.parse(localStorage.getItem("user")), []);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/v1/post?pageNumber=${pageNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) console.log("Can't fetch data");
      const { posts, totalCount } = await response.json();
      if (postDetail.length - 1 < totalCount) {
        setPostDetails((prevPostDetail) => [...prevPostDetail, ...posts]);
        //it checks if data fetched so far is less than no of posts in db then still some posts left to be fetched then it fetched and append into previous one..we used this to prevent of unnecessary fetch request
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInfiniteScroll = async () => {
    //if loading is not happening and user  is scrolled bottom then only states become true and after 2 sec increses the no of page in thse state and as this state changes fetchdata again calls inside callback
    try {
      if (
        !loading &&
        window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setTimeout(() => {
          setPageNumber((prev) => prev + 1); //increment no of pages by 1
        }, 2000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLike = async (postId, userId) => {
    try {
      const response = await fetch(`/api/v1/${postId}/handlelike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) {
        throw new Error("Can't handle likes");
      }
      const post = await response.json(); //new post with updated like
      //here we use this mapping to show the update like in the UI because without this if i like the post then it dont show the changes and after as we scroll down again the same post with update like shows ...
      const updatedPostDetails = postDetail.map((i) => {
        if (i._id === post._id) {
          return post;
        } else {
          return i;
        }
      });
      //we are iterating over the previous posts which are showing in UI and checking if the return post with like exist if yes then replace the particular object post with the older one that changes the state which lead to page rerender and show updated ui
      setPostDetails(updatedPostDetails);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  });
  return (
    <main className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {postDetail.map((post, index) => (
          <AllPostCard
            key={index}
            userName={post.author.name}
            userAvatar={post.profilePicture}
            timestamp={post.timestamp}
            content={post.description}
            postId={post?._id}
            userId={_id}
            likes={post?.likes}
            userImage={post.imagePath}
            title={post.title}
            handleLike={handleLike}
          />
        ))}
      </div>
      {postDetail.length === 0 && (
        <div className="text-stone-700 flex justify-center items-center h-full py-48 text-4xl ">
          No Posts available
        </div>
      )}

      <div className="flex justify-center items-center">
        {postDetail.length !== 0 && (
          <div className="animate-spin rounded-full h-11 w-11 border-t-6 border-b-2 border-blue-800 "></div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
