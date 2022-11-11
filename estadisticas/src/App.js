import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from "./view/Home/Home";
import Login from "./view/Auth/Login";
import Register from "./view/Auth/Register";
import Report from "./view/Reports/Report";
import User from "./view/User/User";
import CreateUser from "./view/User/CreateUser";
import UserList from "./view/User/UserList";
import PermisologyUser from "./view/User/PermisologyUser";

import { AuthContext } from "./context/AuthContext";



export default function App() {



	const initialLoginState = {
		isLoading: true,
		token: null
	}

	const loginReducer = (prevState, action) => {
		switch (action.type) {
			case 'RESTORE_TOKEN':
				return {
					...prevState,
					token: action.token,
					isLoading: false
				}
			case 'LOGIN':
				return {
					...prevState,
					token: action.token,
					isLoading: false
				}
			case 'LOGOUT':
				return {
					...prevState,
					token: action.token,
					isLoading: false
				}
		}
	}

	const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

	const authContext = React.useMemo(
		() => ({
			signIn: async data => {
				try {
					console.log(data);
					window.localStorage.setItem("token", data);
				}
				catch (e) {
					console.log(e);
				}

				dispatch({ type: 'LOGIN', toke: data });
			},
			signOut: () => {
				window.localStorage.removeItem("token")
				dispatch({ type: 'LOGOUT', token: null });
			}
		}),
		[]
	);

	useEffect(() => {
		const checkToken = async () => {
			let userToken;

			try {
				userToken = window.localStorage.getItem("token");
			}
			catch (e) {
				console.log(e);
			}
			dispatch({ type: 'RESTORE_TOKEN', token: userToken });
		}
		checkToken();
	}, [])

	return (
		<React.StrictMode>
			{
				(loginState.isLoading) ? <>
					<div className="text-center mt-2">
						<Spinner animation="grow" variant="success"></Spinner>
					</div>
				</> : <>
					<AuthContext.Provider value={authContext}>
						<BrowserRouter>
							<Routes>
								{
									(loginState.token === null) ? <>
										<Route path="/" element={<Login />} />
										{/* <Route path="/Login" element={<Login />} /> */}
										<Route path="/Register" element={<Register />} />
										<Route
											path="*"
											element={
												<h1>Error 404 - PAGE NOT FOUND</h1>
											}
										/>
									</> : <>
										<Route path="/" element={<Home />} />
										<Route path="/Home" element={<Home />} />
										<Route path="/Report" element={<Report />} />
										<Route path="/User" element={<User />} />
										<Route path="/CreateUser" element={<CreateUser />} />
										<Route path="/UserList" element={<UserList />} />
										<Route path="/PermisologyUser" element={<PermisologyUser />} />
										<Route
											path="*"
											element={
												<h1>Error 404 - PAGE NOT FOUND</h1>
											}
										/>
									</>
								}
							</Routes>
						</BrowserRouter>
					</AuthContext.Provider>
				</>
			}
		</React.StrictMode>
)}