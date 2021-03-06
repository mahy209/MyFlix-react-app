import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";
import Detail from "Routes/Detail";

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/myflix" exact component={Home} />
			<Route path="/myflix/tv" exact component={TV} />
			<Route path="/myflix/search" exact component={Search} />
			<Route path="/myflix/movie/:id" component={Detail} />
			<Route path="/myflix/show/:id" component={Detail} />
			<Redirect from="*" to="/myflix" />
		</Switch>
	</Router>
);
