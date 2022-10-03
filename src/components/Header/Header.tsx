import { HeaderContainer } from "./Header.styles";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt=" logo com fecha colchete e underlaine" />
    </HeaderContainer>
  );
}