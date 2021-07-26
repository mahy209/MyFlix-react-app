import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// if it is not the last child,
const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

const Title = styled.span`
	font-size: 16px;
	fotn-weight: 600;
`;

const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 125px);
	grid-gap: 25px;
`;

const Section = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
	</Container>
);

Section.prototype = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default Section;
