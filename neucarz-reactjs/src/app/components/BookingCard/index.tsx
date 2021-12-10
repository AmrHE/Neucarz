import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../Marginer";
import Button from "../Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../Responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-7
    md:pr-7
  `};
`;

const ItemContainer = styled.div`
  ${tw`
    flex
    relative
    cursor-pointer
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    select-none
    
  `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 6vh;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DatePicker = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2.5em;
  left: 0;

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
`;
//STYLING FOR THE DATE PICKER WHEN OFFSET PROPS IS TRUE
// ${({ offset }: any) =>
//   offset &&
//   css`
//     left: -6em;
//   `};

const BookingCard = () => {
  //Start calendar state
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);

  //return calendar state
  const [returnDate, setReturnDate] = useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  //Toggle Pick Up Date Calendar
  const toggleStartDatePicker = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
    if (setIsReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };

  //Toggle Return Date Calendar
  const toggleReturnDatePicker = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    if (setIsStartCalendarOpen) setIsStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer onClick={toggleStartDatePicker}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DatePicker value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDatePicker}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DatePicker value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Car" />
    </CardContainer>
  );
};

export default BookingCard;
