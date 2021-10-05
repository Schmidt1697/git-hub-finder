import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	//pull out piece of state we want, and the action/method we want to do
	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (text === "") {
			alertContext.setAlert("Please enter something", "light");
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
			{githubContext.users.length > 0 && (
				<button
					className="btn btn-light btn-block"
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
