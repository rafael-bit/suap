import styled from "styled-components";

export const Container = styled.footer`
	background: var(--dark);
	color: var(--white);

	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;

	height: 60px;
	width: 100%;

	padding: 20px;

  position: absolute;
  bottom: 0;

















body.dark {
  background-color: #292C35;
}

body.dark p {
  color: #fff;
}

#checkbox {
  opacity: 0;
  position: absolute;
}

label {
  background: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  height: 20px;
  width: 45px;
  transform: scale(1.5);
}

.ball {
  background: var(--white);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 15px;
  width: 15px;
  transition: transform 0.2s linear;
}

#checkbox:checked + label .ball {
  transform: translateX(24px)
}


@media(max-width: 450px){
  p{
    display: none;
  }
}
`;