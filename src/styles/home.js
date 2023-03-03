import styled from "styled-components";

export const Content = styled.div`

  h1{
    margin: 1rem;
  }

  img{
    margin-left: 1rem;
    border-radius: 50%;
  }

.tabs {
	display: flex;
  width: 92vw;
  list-style: none;
	margin: 0rem 1rem;

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
    padding: 25px;
    background: var(--background);
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
		left: 16px;
	}

	#tab-content2, #tab-content1{
		width: 95vw;
	}
} 
`;