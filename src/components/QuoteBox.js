import React, { Component } from "react";
import Axios from "axios";

class QuoteBox extends Component {
	state = {
		quotes: [],
		isLoaded: false,
		randomQuote: {}
	};

	componentDidMount() {
		Axios.get(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		).then(res => {
			this.setState({ quotes: res.data.quotes, isLoaded: true });
			this.newRandomQuote();
		});
	}

	newRandomQuote = () => {
		const { quotes } = this.state;
		this.setState({
			randomQuote: quotes[Math.floor(Math.random() * quotes.length)]
		});
	};

	render() {
		const { quote, author, isLoaded } = this.state;
		if (isLoaded) {
			return (
				<div
					className="card card-body bg-light"
					style={{ marginTop: "20%", height: "auto" }}
				>
					<div id="quote-box" className>
						{}
						<h2 id="text" className="text-center">
							{randomQuote.quote}
						</h2>
						<p id="author" className="text-right">
							- {randomQuote.author}
						</p>

						<button
							id="new-quote"
							onClick={this.newRandomQuote}
							className="btn btn-primary float-right"
						>
							New Quote
						</button>
						<div>
							<a
								id="tweet-quote"
								href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
									'"' + randomQuote.quote + '" - ' + randomQuote.author
								)}`}
							>
								<i style={{ size: 100 }} class="fab fa-twitter fa-lg" />
							</a>
						</div>
					</div>
				</div>
			);
		}
		return null;
	}
}

export default QuoteBox;
