import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/apit";
import { PostProps } from "../Blog/Blog.types";
import { PostBody } from "./components/PostBody/PostBody";
import { PostHeader } from "./components/PostHeader";

const username = 'mendonca91';
const repoName = 'post-issues';

export function Post() {
  const [postData, setPostData] = useState<PostProps>({} as PostProps);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostBody content={postData.body} />}
    </>
  );
}