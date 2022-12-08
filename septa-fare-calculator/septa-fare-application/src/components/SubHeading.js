import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledSubHeading = styled.div`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: ${props => props.dark ? "white" : "black"};
  font-weight: 500;
`;

const SubHeading = ({subheading, dark}) => {
  return (
    <StyledSubHeading dark={dark}>{subheading}</StyledSubHeading>
  )
}

SubHeading.propTypes = {}

export default SubHeading