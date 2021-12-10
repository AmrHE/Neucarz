import React from "react";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";

const FooterContainer = styled.div`
  /* min-height: 24em; */
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pl-10
    md:pt-16
    items-center
    justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    `}
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `}
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-300
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-1
    md:pr-1

  `}
`;

const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-1
    md:pr-1
    mt-7
    md:mt-0
  `}
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
    justify-center
    items-center
    md:items-start
    
  `}
`;

const ListItem = styled.li`
  ${tw`
    mb-2
    `}
  & > a {
    ${tw`
      text-sm
      text-white
      transition-all
      hover:text-gray-300
      `}
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
      text-2xl
      font-bold
      text-white
      mb-2
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-500
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Neucarz is a car renting and selling company located in many
            countires across the world which has high quality cars and top rated
            services
          </AboutText>
        </AboutContainer>

        <SectionContainer>
          <LinksList>
            <HeaderTitle>Our Links</HeaderTitle>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Car Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <LinksList>
            <HeaderTitle>Other Links</HeaderTitle>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+20 100 599 4499</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>support@neucarz.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <BottomContainer>
          <CopyrightText>
            Copyright &copy; {new Date().getFullYear()} Neucarz, All Rights
            Reserved.
          </CopyrightText>
        </BottomContainer>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
