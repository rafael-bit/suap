import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,800&display=swap');

	:root{
		--black: #000;
		--dark: #414141;
		--white: #fff;
		--green: #25a25a;
		--background: #eeeeee;
	}

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}
`;