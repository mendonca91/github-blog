import {
    FaGithub,
    FaCalendar,
    FaChevronLeft,
    FaComment,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Loading } from "../../../../components/Loading";
import { DateFormatter } from "../../../../utils/DateFormater";
import { PostProps } from "../../../Blog/Blog.types";
import { Container } from "./PostHeader.styles";
import { PostHeaderProps } from "./PostHeader.types";



export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const formattedDate = DateFormatter(postData?.created_at);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FaChevronLeft />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FaGithub />
              {postData.user.login}
            </li>
            <li>
              <FaCalendar />
              {formattedDate}
            </li>
            <li>
              <FaComment />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </Container>
  );
}