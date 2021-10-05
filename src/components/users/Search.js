import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
	const githubContext = useContext(GithubContext);
	//pull out piece of state we want, and the action/method we want to do
	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === "") {
			setAlert("Please enter something", "light");
		} else {
			githubContext.searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit} action="" className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="search"
					className="btn btn-dark btn-block"
				/>
			</form>

			{/* wrap the button to apply this condition */}
			{showClear && (
				<button className="btn btn-light btn-block" onClick={clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
