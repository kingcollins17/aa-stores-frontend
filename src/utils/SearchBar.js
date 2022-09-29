import React, { useState } from "react";
import "../stylesheets/searchbar.scss";
import { Box } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@rebass/forms";
import { useDispatch } from "react-redux";
import { SEARCH, GETTING, STOP } from "../redux/blogReducers";
const SearchBar = ({ toggle, ...rest }) => {
	const [term, setTerm] = useState("");
	const dispatch = useDispatch();
	return (
		<Box className='search' width={"100%"} maxWidth={"300px"} height='40px' {...rest}>
			<Box className='bar' width='210px'>
				<Input
					type='text'
					name='search'
					id='search'
					onChange={(e) => {
						setTerm(e.target.value);
					}}
				/>
			</Box>
			<Box
				className='icon'
				onClick={() => {
					dispatch({
						type: SEARCH,
						payload: term,
					});
					console.log("clicked");
					toggle();
				}}
			>
				<FontAwesomeIcon icon={faSearch} />
			</Box>
		</Box>
	);
};

export default SearchBar;
