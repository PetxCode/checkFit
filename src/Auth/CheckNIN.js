import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

import Swal from "sweetalert2";

const CheckNIN = () => {
	const yupSchema = yup.object().shape({
		nin: yup.string().required("This field should be filled"),
	});

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) });

	const onSubmit = handleSubmit(async (val) => {
		const { nin } = val;

		const config = {
			"content-type": "application/json",
			"access-control-allow-origin": "*",
			authorization:
				"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkNjE3NTAxNGU2Y2UyNzY1MDQ3MzU5NjczMDQ2NDBkYmZjNTIzNTU3OTQ0ZTRkZWMyODFmMWU0NjMyNjM0NTUxYmZhYjA3NThlZDFkNDdiIn0.eyJhdWQiOiI1IiwianRpIjoiOWQ2MTc1MDE0ZTZjZTI3NjUwNDczNTk2NzMwNDY0MGRiZmM1MjM1NTc5NDRlNGRlYzI4MWYxZTQ2MzI2MzQ1NTFiZmFiMDc1OGVkMWQ0N2IiLCJpYXQiOjE2NTQ4ODE4NDEsIm5iZiI6MTY1NDg4MTg0MSwiZXhwIjoxNjg2NDE3ODQxLCJzdWIiOiIyNSIsInNjb3BlcyI6W119.p3RI5ZppHrDJr6VPkyx5er8BS2ZbvN14zqlZ5QpMqzAKwJ7laqoqIfzz_ro8mIe8rr-kD48n3fw7_VscqgWqMEwVIEgE83A8nhCy5l_5_O4-Ul59bxoAqhOpXl7w7ph1M1u7gwoSlR8zdB9p-QjEnBM43FyTzCw5w0HB_PHHQuSdZa6_P5CRQ-w2L0aUt_bHIfAkYpu2tf51CAkw8rqv4IWSIX2ZgkGZLvFat_iNLRQ_yPJ8NWofDvbYNobC96MsXUKGrVzbcopUp-u3cKh1AlpOQu7PfKBMJyxEc_lbDNBWTnphSoxll4a_goMqwFxiqYy_rcUbPd2cEKEJtJn8DjxqJixd-7J24OPHifcBKUw2mwtzspgRdMF49ubKD9I098WnTOOciuRfjZfOo12XPSgFOdf7dqbsN58r503irjaDLPAJCGhs8G-GoO_xaj90IJ0o1jbcKRFy1uP6C9jltq2EluUCisZwW9esbnHINvyI3gYdmBuujwkwXbZJY0S19p3R-5HLViApS0gXfPHgNxEgK1kjlFNPzVAMmQoSyrguHjkGp5HYhaOYgZbb75xOkUte5zQ9VaL6NZkdGomb8ICI_aRDBVTDBuiaYWPa67yEl3yMuCPmusOrGseJdmZELO0JnT7nO5MezrurNhPg8RTeo83XpVX6eBlCpJy6E8Y",
		};

		const localURL =
			"http://ad1x.sloganinimcverification.com/api/triangle/nin/verify";

		const url = `${localURL}`;

		await axios
			.post(url, { data: nin, searchType: "nin" }, config)
			.then((res) => {
				console.log(res);
			});

		Swal.fire({
			icon: "success",
			title: "Password reset successfully",
			text: "Now you can sign in...!",
			footer: '<a href="">This is developed by CodeLab Students: set05</a>',
		});
	});

	const checkData = handleSubmit(async () => {
		const localURL =
			"http://ad1x.sloganinimcverification.com/api/triangle/nin/verify";

		fetch(localURL, {
			method: "POST",
			headers: {
				"access-control-allow-origin": "*",
				"Content-type": "application/json; charset=UTF-8",

				authorization:
					"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjlkNjE3NTAxNGU2Y2UyNzY1MDQ3MzU5NjczMDQ2NDBkYmZjNTIzNTU3OTQ0ZTRkZWMyODFmMWU0NjMyNjM0NTUxYmZhYjA3NThlZDFkNDdiIn0.eyJhdWQiOiI1IiwianRpIjoiOWQ2MTc1MDE0ZTZjZTI3NjUwNDczNTk2NzMwNDY0MGRiZmM1MjM1NTc5NDRlNGRlYzI4MWYxZTQ2MzI2MzQ1NTFiZmFiMDc1OGVkMWQ0N2IiLCJpYXQiOjE2NTQ4ODE4NDEsIm5iZiI6MTY1NDg4MTg0MSwiZXhwIjoxNjg2NDE3ODQxLCJzdWIiOiIyNSIsInNjb3BlcyI6W119.p3RI5ZppHrDJr6VPkyx5er8BS2ZbvN14zqlZ5QpMqzAKwJ7laqoqIfzz_ro8mIe8rr-kD48n3fw7_VscqgWqMEwVIEgE83A8nhCy5l_5_O4-Ul59bxoAqhOpXl7w7ph1M1u7gwoSlR8zdB9p-QjEnBM43FyTzCw5w0HB_PHHQuSdZa6_P5CRQ-w2L0aUt_bHIfAkYpu2tf51CAkw8rqv4IWSIX2ZgkGZLvFat_iNLRQ_yPJ8NWofDvbYNobC96MsXUKGrVzbcopUp-u3cKh1AlpOQu7PfKBMJyxEc_lbDNBWTnphSoxll4a_goMqwFxiqYy_rcUbPd2cEKEJtJn8DjxqJixd-7J24OPHifcBKUw2mwtzspgRdMF49ubKD9I098WnTOOciuRfjZfOo12XPSgFOdf7dqbsN58r503irjaDLPAJCGhs8G-GoO_xaj90IJ0o1jbcKRFy1uP6C9jltq2EluUCisZwW9esbnHINvyI3gYdmBuujwkwXbZJY0S19p3R-5HLViApS0gXfPHgNxEgK1kjlFNPzVAMmQoSyrguHjkGp5HYhaOYgZbb75xOkUte5zQ9VaL6NZkdGomb8ICI_aRDBVTDBuiaYWPa67yEl3yMuCPmusOrGseJdmZELO0JnT7nO5MezrurNhPg8RTeo83XpVX6eBlCpJy6E8Y",
			},
		})
			.then((results) => results.json())

			.then((data) => {
				console.log(data);
			});
	});

	return (
		<Container>
			<Wrapper onSubmit={onSubmit}>
				<Logo>nin Check</Logo>

				<Text>Please enter your NIMC Number.</Text>

				<LineHolder>
					<Line />
					<span>let's do this</span>
					<Line1 />
				</LineHolder>

				<InputHolder>
					<Icon1 />
					<Input placeholder="NIN" {...register("nin")} />
				</InputHolder>
				<Error>{errors?.nin?.message}</Error>

				<Button1 type="submit">
					<Icon6 />
					<span>Chcek Now</span>
				</Button1>
			</Wrapper>
		</Container>
	);
};

export default CheckNIN;

const Error = styled.div`
	font-size: small;
	color: red;
`;

const Button1 = styled.button`
	outline: none;
	border: 0;
	font-family: Poppins;
	font-size: 14px;
	background-color: rgb(16, 143, 233);
	/* width: 100%; */
	color: white;
	margin: 20px 0px;
	padding: 7px 50px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	font-size: 14px;
	cursor: pointer;
`;

const Linked = styled.div`
	display: flex;
`;
const Span = styled(Link)`
	color: rgba(16, 143, 233);
	cursor: pointer;
	margin-left: 5px;

	text-decoration: none;
`;

const Icon2 = styled(BsFillPersonFill)`
	margin: 0 10px;
	color: gray;
`;
const Icon3 = styled(FaRegUserCircle)`
	margin: 0 10px;
	color: gray;
`;
const Icon4 = styled(MdPassword)`
	margin: 0 10px;
	color: gray;
`;
const Icon6 = styled(GiPadlock)`
	margin-right: 10px;
`;

const Input = styled.input`
	flex: 1;
	outline: none;
	border: 0;

	::placeholder {
		font-family: Poppins;
	}
`;

const Icon1 = styled(AiOutlineMail)`
	margin: 0 10px;
	color: gray;
`;

const InputHolder = styled.div`
	margin-top: 10px;
	border: 1px solid silver;
	width: 80%;
	height: 35px;
	display: flex;
	align-items: center;
	border-radius: 3px;
`;

const ImageInput = styled.input`
	display: none;
`;

const ImageLabel = styled.label`
	font-size: 12px;
	padding: 8px 20px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

	margin: 10px 0;
	background-color: rgb(16, 143, 233);
	color: white;
	border-radius: 3px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid transparent;
	outline: 2px solid purple;
	background-clip: content-box;
`;

const ImageHold = styled.div`
	margin-top: 20px;
	margin-left: 40px;
	margin-right: 40px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Line1 = styled.div`
	border-top: 1px solid silver;
	width: 60%;
	margin-right: 40px;
`;

const Line = styled.div`
	border-top: 1px solid silver;
	width: 60%;
	margin-left: 40px;
`;

const LineHolder = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin: 30px 0;

	span {
		margin: 0 10px;
		text-transform: uppercase;
		font-size: 12px;
		width: 55%;
	}
`;

const Icon = styled(FaFacebookSquare)`
	margin-right: 10px;
`;

const Button = styled.div`
	background-color: rgb(16, 143, 233);
	/* width: 100%; */
	color: white;
	margin: 20px 0px;
	padding: 7px 50px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	font-size: 14px;
	cursor: pointer;
`;

const Text = styled.div`
	padding: 0 30px;
	color: gray;
	text-align: center;
	line-height: 1.2;
	font-size: 14px;
`;

const Logo = styled.div`
	font-family: Pacifico;
	margin-top: 50px;
	font-size: 35px;
	font-weight: 500;
	margin-bottom: 10px;
`;

const Wrapper = styled.form`
	width: 350px;
	min-height: 100px;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	margin-top: 30px;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 5px;
	justify-content: center;
`;

const Container = styled.div`
	/* padding-top: 70px; */
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 30px;
	height: 100vh;
`;
