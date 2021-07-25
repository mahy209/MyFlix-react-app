import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
	display: flex;
`;

const Item = styled.li`
	width: 110px;
	height: 50px;
	margin: 15px;
	padding: 6px;
	float: right;
	text-align: center;
	font-size: 18px;
	font-family:Calibri (Body);
	border-bottom: 5px solid ${(props) => (props.current ? "white" : "transparent")};
	transition: border-bottom 0.5s ease-in-out;
`;

const Title = styled.li`
color:rgb(204, 0, 0);
font-size: 26px;
font-weight: bold;
font-family: impact;
margin: 0;
padding: 0;
perspective: 1000px;
perspective-origin: 50% 0;
  animation: netflix_style 3.5s infinite;
  outline: none;
  white-space: nowrap;
}

@keyframes netflix_style {
  0% {
    text-shadow: makelongshadow(100,1);
    color::#e90418;
    transform: scale(1.5, 1.5);
  }
  10% {
    text-shadow: makelongshadow(100,1.5);
    color::#e90418;
    transform: scale(1.5, 1.5);
  }
  15% {
     color::#e90418;
  }
  20% {    
    color:#e90418;
    text-shadow: none;
    transform: scale(1.1, 1.1);
  }
  75% {
    opacity: 1;
  }
  80% {
    opacity: 0;    
    color:#e90418;
    transform: scale(0.85, 0.9);
  }
  
  100% {
    opacity: 0;
  }
}
`;

const SLink = styled(Link)`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	c
`;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<List>
		    <Item>
                <Title  className="navbar-brand py-0"> Myflix </Title>
            </Item>
			{/* current is condition type */}
			<Item current={pathname === "/myflix"}>
				<SLink to="/myflix" className="btn btn-block btn-lg jumboButton">Movies</SLink>
			</Item>
			<Item current={pathname === "/myflix/tv"}>
				<SLink to="/myflix/tv" className="btn btn-block btn-lg jumboButton">TV</SLink>
			</Item>
			<Item current={pathname === "/myflix/search"}>
				<SLink to="/myflix/search" className="btn btn-block btn-lg jumboButton">Search</SLink>
			</Item>
		</List>
	</Header>
));
