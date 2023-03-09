import styled from "styled-components";

export const Container = styled.div`
	background: var(--background);

	width: 100vw;
	height: 100vh;
`;

export const Card = styled.div`
	padding-top: 3rem;
	display: flex;
	justify-content: center;
`;

export const Box = styled.div`
	background: var(--white);

	width: 35%;
	border-radius: 30px;

	margin-bottom: 10rem;

	h1{
		font-size: 65px;
		font-weight: 400;

		margin-top: 5rem;

		text-align: center;
	}

	form{
		width: 100%;

		margin: 5rem;
	}

	label{
		margin: 1rem;
	}

	input{
		width: 70%;
		height: 40px;

		border-radius: 30px;
		border: .5px solid #9d9d9d;

		margin: .3rem 0rem 1.5rem 0rem;
		padding-left: 1rem;

		outline: 0;
	}

	.submit{

		input{
			background: var(--green);
			color: var(--white);

			height: 45px;
			font-size: 17px;

			margin-bottom: 3rem;
			cursor: pointer;
		}
	}

	.submit:hover{
		opacity: .9;
	}

	a{
		text-decoration: none;
		color: var(--black);
	}

	a:hover{
		opacity: 0.5;
		text-decoration: underline;
	}

	@media(max-width: 1250px){

		width: 70vw;
		margin: 0;

		h1{
			font-size: 50px;
		}

		form{
			margin: 8vw;
		}
	}
`;