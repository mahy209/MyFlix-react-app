import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api.js";

export default class extends React.Component {
	state = {
		nowPlaying: null,
		upcoming: null,
		popular: null,
		error: null,
		loading: true,
	};

	async componentDidMount() {
		try {
			const {
				data: { results: nowPlaying }, // object destructuring // in response, in data, get results in an array called 'nowPlaying'.
			} = await moviesApi.nowPlaying();

			const {
				data: { results: upcoming },
			} = await moviesApi.upcoming();

			const {
				data: { results: popular },
			} = await moviesApi.popular();
			this.setState({ nowPlaying, upcoming, popular });
		} catch {
			this.setState({
				error: "Can't find movies information.",
			});
		} finally {
			this.setState({
				loading: false,
			});
		}
	}

	render() {
		// this goes to presenter.
		const { nowPlaying, upcoming, popular, error, loading } = this.state;
		return (
			<HomePresenter
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				popular={popular}
				error={error}
				loading={loading}
				prop={this.props}
			/>
		);
	}
}
