import { DateFormatter } from "../../../../utils/DateFormater";
import { Container } from "./PostCard.styles";
import { PostCardProps } from "./PostCard.types";


export function PostCard({ post }: PostCardProps) {
  const formattedDate = DateFormatter(post.created_at);

  return (
    <Container to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </Container>
  );
}