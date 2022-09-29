import React from "react";
import { useState } from "react";
import { Box, Heading } from "rebass";
import { CreateBlog } from "./CreateAndEdit";
import "../stylesheets/admin.scss";
import { ExButton, Wrap, BlogCard } from "../extends";
import { BlogDetail } from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import { WrapLoader } from "./Blog";
import Loader from "react-spinners/DotLoader";
import Private from "./PrivateRoute";
import { authFetchBlogs } from "../redux/actions";
import { CLOSE } from "../redux/menu";

const Admin = () => {
	const [createForm, setCreateForm] = useState(false);
	const { loading, blogs, error, created } = useSelector((state) => state.admin);
	const dispatch = useDispatch();
	let count = 0.2;
	React.useEffect(() => {
		document.title = "admin-panel";
		dispatch(authFetchBlogs());
		dispatch({
			type: CLOSE,
		});
	}, []);

	return (
		<Private>
			<Box width='100%' m={0} py={3}>
				<Wrap width={["80%", "70%", "60%", "40%"]}>
					{createForm == true ? (
						<CreateBlog
							setShow={() => {
								setCreateForm(false);
							}}
						/>
					) : (
						<ExButton
							variant='primary'
							onClick={() => {
								setCreateForm(true);
							}}
						>
							Create Post
						</ExButton>
					)}
				</Wrap>
				<Wrap className='list' width={["90%", "80%"]}>
					<Heading fontFamily='heebo' fontWeight='600'>
						Posts
					</Heading>
					{blogs
						? blogs.map((blog) => (
								<BlogCard
									key={blog.id}
									src={blog.image}
									duration={(count += 0.1)}
									component={
										<BlogDetail
											id={blog.id}
											name={blog.name}
											details={blog.details}
											date={blog.date}
											link={blog.link}
											auth
										/>
									}
								/>
						  ))
						: null}
					<WrapLoader>
						<Loader loading={loading} color='#f63750' />
					</WrapLoader>
				</Wrap>
			</Box>
		</Private>
	);
};

export default Admin;
