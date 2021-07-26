import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section.js";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
	padding: 20px;
	font-size: 24px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
	<>
		<Helmet>
			<title>Movies | Myflix</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{nowPlaying && nowPlaying.length > 0 && (
					<Section title="Now Playing">
						{nowPlaying.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imageUrl={movie.poster_path}
								title={movie.original_title}
								rating={movie.vote_average}
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{upcoming && upcoming.length > 0 && (
					<Section title="upcoming Movies">
						{upcoming.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imageUrl={movie.poster_path}
								title={movie.original_title}
								rating={movie.vote_average}
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{popular && popular.length > 0 && (
					<Section title="Popular Movies">
						{popular.map((movie) => (
							<Poster
								key={movie.id}
								id={movie.id}
								imageUrl={movie.poster_path}
								title={movie.original_title}
								rating={movie.vote_average}
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{error && <Message text={error} color="#e74c3c" />}
			</Container>
		)}
	</>
);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default HomePresenter;
