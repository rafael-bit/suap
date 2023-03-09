import styled from "styled-components";

export const Content = styled.div`

  h1{
    margin: 1rem;
  }

  img{
    margin-left: 1rem;
    border-radius: 50%;
  }

  p{
    margin: 600px 30px 50px 50px;
  }

.tabs {
	display: flex;
  width: 92vw;
  list-style: none;
	margin: 0rem 0.6rem;

  input[type="radio"] {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  label {
    display: block;
    padding: 15px;
    cursor: pointer;
		background: var(--background);
		border-radius: 50px;
		width: 156px;
		text-align: center;
		margin-right: 1rem;

    &:hover {
			opacity: .8;
    }
  }

  .tab-content{
		margin-top: -18px;
    display: none; 
		position: absolute;
    overflow: hidden;
    width: 100%;
    padding: 12px;
    background: var(--background);
    margin-bottom: 5rem;
    border-radius: 0px 24px 24px 24px;
  }
  //The Magic
  [id^="tab"]:checked + label { 
    padding-top: 17px;
		border-radius: 50px;
    background: var(--background); 
  }
  [id^="tab"]:checked ~ [id^="tab-content"] {
    display: block;
  }

	#tab-content2{
		left: 10px;
	}

	#tab-content2, #tab-content1{
		width: 95vw;
	}
}
`;

export const Table = styled.table`
  border-spacing: 0 0.5rem;

  padding: .5rem;
  width: 100%;

  a{
    background: var(--green);
    color: var(--white);

    padding: .6rem;
    border-radius: 30px;

    text-decoration: none;
  }

  thead, tbody{
    background: var(--white);
  }
  
  thead tr th{
    padding: 1rem;
  }

  thead tr th:nth-child(1){
    border-radius: 15px 0px 0px 15px;
  }

  thead tr th:nth-child(3){
    border-radius: 0px 15px 15px 0px;
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