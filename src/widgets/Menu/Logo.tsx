import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 52px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 112px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
      

      @-webkit-keyframes hvr-buzz {
        50% {
          -webkit-transform: translateX(3px) rotate(2deg);
          transform: translateX(3px) rotate(2deg);
        }
        100% {
          -webkit-transform: translateX(-3px) rotate(-2deg);
          transform: translateX(-3px) rotate(-2deg);
        }
      }
      @keyframes hvr-buzz {
        50% {
          -webkit-transform: translateX(3px) rotate(2deg);
          transform: translateX(3px) rotate(2deg);
        }
        100% {
          -webkit-transform: translateX(-3px) rotate(-2deg);
          transform: translateX(-3px) rotate(-2deg);
        }
      }
      
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    
        &:hover, &:focus, &:active {
        -webkit-animation-name: hvr-buzz;
        animation-name: hvr-buzz;
        -webkit-animation-duration: 0.15s;
        animation-duration: 0.15s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
      }



      
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        // box-shadow: 0 0 1px blue;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow;
        transition-property: box-shadow;
    
      &:hover, &:focus, &:active {
        box-shadow: 0 0 2rem ${({ theme }) => theme.colors.primary};
      }

    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
