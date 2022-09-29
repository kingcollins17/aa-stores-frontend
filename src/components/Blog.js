import { faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, Link, Text } from "rebass";
import { BlogCard, ExButton, Wrap } from "../extends";
import { fetchBlogs, deleteBlog } from "../redux/actions";
import "../stylesheets/blog.scss";
import Loader from "react-spinners/DotLoader";
import SearchBar from "../utils/SearchBar";

export const WrapLoader = (props) => {
	return <Box className='loader'>{props.children}</Box>;
};

export const BlogDetail = ({ id, name, details, date, link, auth }) => {
	const n = Math.floor(Math.random() * 53);
	const [liked, setLike] = useState(false);
	const dispatch = useDispatch();

	return (
		<Wrap className='blog-detail' width='90%' py={[2, 3, 4]}>
			<Heading fontSize={[3, 5]} fontFamily='heebo'>
				{name}
			</Heading>
			<Box className='desc'>
				<Text as='p' className='author'>
					By: Admin
				</Text>
				<Box className='icon-actions'>
					<Button
						color={"#0004"}
						onClick={() => {
							if (liked == false) {
								setLike(true);
							} else setLike(false);
						}}
					>
						<FontAwesomeIcon icon={faHeart} color={liked == true ? "#f63750" : "#0004"} />
						{n ? n : 24}
					</Button>
					<Button color={"#0004"}>
						<FontAwesomeIcon icon={faMessage} />
					</Button>
				</Box>
			</Box>
			<Box className='content'>
				<Text as='p' fontSize={[1, 1, "1rem"]}>
					{details}
				</Text>
				<Link
					href={link}
					color='#f62b45'
					fontFamily={"nun"}
					width='250px'
					sx={{ display: "flex", justifyContent: "flex-start" }}
				>
					learn more
				</Link>
				{auth ? (
					<Button
						sx={{
							display: "inline-block",
							width: "auto",
							transition: "all 0.4s",
							"&:hover": {
								color: "#fff",
								bg: "#f62b45",
							},
						}}
						py='0.3em'
						px='2em'
						fontFamily='nun'
						color='#f62b45'
						onClick={() => {
							console.log("DELETED");
							dispatch(deleteBlog(id));
						}}
					>
						delete
					</Button>
				) : null}
			</Box>
		</Wrap>
	);
};
const Blog = () => {
	const dispatch = useDispatch();
	// useEffect dependent on the blog state
	const { blogs, loading, error, searchResult } = useSelector((state) => state.blog);
	const [no, setNo] = useState(2);
	/**
	 *
	 */
	// state to handle the display of search results.
	const [searched, setSearched] = useState(false);

	let count = 0.2;
	React.useEffect(() => {
		document.title = "products";
		dispatch(fetchBlogs());
	}, []);
	return (
		<Box className='blog-list' width='100%' my={5}>
			<Wrap className='wrap' width='90%'>
				{searched == true && searchResult ? (
					<Text fontFamily='heebo' fontSize={[4, 5]} mb={3}>
						Search{" "}
						<Text as='p' display='inline' color='#f63750'>
							Results
						</Text>
					</Text>
				) : (
					<Text fontFamily='heebo' fontSize={[4, 5]} mb={3}>
						Latest{" "}
						<Text as='p' display='inline' color='#f63750'>
							Updates
						</Text>
					</Text>
				)}
				<SearchBar
					my={3}
					toggle={() => {
						setSearched(true);
					}}
				/>
				<Box width='100%' className='list'>
					{searchResult && searched == true ? (
						searchResult.map((blog) => (
							<BlogCard
								src={blog.image ? blog.image : null}
								duration={blogs.length < 20 ? (count += 0.2) : (count += 0.05)}
								component={
									<BlogDetail
										name={blog.name}
										details={blog.details}
										date={blog.date}
										link={blog.link}
									/>
								}
								key={blog.id}
							/>
						))
					) : false ? (
						<Heading fontFamily='rubik' fontSize={3} fontWeight={2} fontStyle='italic'>
							No items matched your search
						</Heading>
					) : null}
					{blogs && !searchResult
						? blogs
								.slice(0, no)
								.map((blog) => (
									<BlogCard
										src={blog.image ? blog.image : null}
										duration={blogs.length < 20 ? (count += 0.2) : (count += 0.05)}
										component={
											<BlogDetail
												name={blog.name}
												details={blog.details}
												date={blog.date}
												link={blog.link}
											/>
										}
										key={blog.id}
									/>
								))
						: null}
					{blogs && !searchResult ? (
						<ExButton
							onClick={() => {
								let len = blogs.length;
								if (no < len) setNo(no + 1);
								else setNo(1);
							}}
							variant='primary'
							width={"auto"}
							fontSize={"0.9em"}
							color='#fff'
							sx={{
								transition: "all 0.4s",
								"&:hover": {
									bg: "#f5f5f5",
									color: "#f62b45",
								},
							}}
						>
							{no < blogs.length ? "View more" : "see less"}
						</ExButton>
					) : null}
				</Box>
			</Wrap>
			<WrapLoader>
				<Loader loading={loading} color='#f63750' />
			</WrapLoader>
		</Box>
	);
};

export default Blog;
