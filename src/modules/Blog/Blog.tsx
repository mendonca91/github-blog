import { useCallback, useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { api } from "../../services/apit";
import { PostsListContainer } from "./Blog.styles";
import { PostProps } from "./Blog.types";
import { PostCard } from "./components/Post/PostCard";
import { Profile } from "./components/Profile/Profile";
import { SearchInput } from "./components/SearchInput/SearchInput";

const username = 'mendonca91';
const repoName = 'post-issues';

export function Blog(){
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  

    const getPosts = useCallback(
      async (query: string = "") => {
        try {
          setIsLoading(true);
          const response = await api.get(
            `/search/issues?q=${query}%20repo:${username}/${repoName}`
          );
        console.log(response);
        
          setPosts(response.data.items);
        } finally {
          setIsLoading(false);
        }
      },
      [posts]
    );
  
    useEffect(() => {
      getPosts();
    }, []);
  
    return (
        <>
        <Profile/>
        <SearchInput postsLength={posts.length}  getPosts={getPosts}/>
        {isLoading ? (
        <Loading />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <PostCard key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>

    )
}