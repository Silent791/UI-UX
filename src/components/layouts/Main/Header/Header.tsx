import Button from "@/components/common/Button/Button";
import React from "react";
import { VscColorMode } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://www.svgrepo.com/show/285842/movie.svg"></Style.Img>
        </Style.Logo>
        <Style.Name>High-quality movies, minimal file size</Style.Name>
        <Style.Buttons>
          <Button
            name={<VscColorMode />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
