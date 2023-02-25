import { Container } from "./style"
import Image from "next/image"
import Script from "next/script"

export default function Footer() {
	return (
		<Container>
			<p>Última atualização 25/2/2023</p>
			<span>SUAP &copy; 2023</span>
			<div>
  			<input type="checkbox" id="checkbox"  />
  			<label for="checkbox">
    			<Image src="/moon.svg" width="13" height="13"/>
    			<Image src="/sun.svg" width="13" height="13"/>
    			<div className="ball"></div>
  			</label>
			</div>
			<Script src="/Script/mode-dark.js"></Script>
		</Container>
	)
}