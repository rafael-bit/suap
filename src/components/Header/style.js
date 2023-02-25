import styled from "styled-components";

export const Content = styled.header`
	background-color: var(--dark);
	padding: 20px 0px;
	width: 100%;
	height: 80px;
	box-sizing: border-box;
	
	display: flex;

	h1{
		width: 91px;

		font-size: 2.4rem;
		font-weight: 500;
	}

	nav{
		display: flex;
		line-height: 40px;
		justify-content: flex-end;
		width: 95vw;
	}

	ul{
		display: flex;
		list-style: none;
	}

	a{
		color: var(--white);
		text-decoration: none;

		margin-left: 2rem;
	}

	img{
		border-radius: 50px;
		margin-right: 10px;
	}

	@media(max-width: 760px){
		nav{
			width: 78vw;
		}
	}

	@media(max-width: 460px){
		nav{
			width: 70vw;
		}
	}

	@media(max-width: 320px){
		h1{
			font-size: 1.5rem;
		}
	}
`;