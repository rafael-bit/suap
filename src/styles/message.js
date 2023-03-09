import styled from "styled-components";

export const Container = styled.div`
	background: var(--background);
	text-align: center;
	
	h1{
		text-align: center;
		padding: 3rem;
	}

	.table{
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 5rem;
	}
`;

export const Table = styled.table`
  border-spacing: 0 0.5rem;

  padding: .5rem;
  width: 90%;

  a{
    background: var(--green);
    color: var(--white);

    padding: .6rem;
    border-radius: 30px;

    text-decoration: none;
  }

  tbody{
    background: var(--white);
  }

	tr{
		text-align: center;
	}

  tbody tr td{
    padding: 1rem;
  }

  tbody tr td:nth-child(1){
    border-radius: 15px 0px 0px 15px;
  }

  tbody tr td:nth-child(3){
    border-radius: 0px 15px 15px 0px;
  }
`;