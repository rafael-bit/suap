import Link from "next/link"
import Image from "next/image"
import { Content } from "./style"

export default function Header() {
	return (
		<Content>
			<h1><Link href="#"><span>SUAP</span></Link></h1>

				<nav>
					<ul>
						<li><Link href="">Notificações</Link></li>
						<li><Link href=""><Image src="/profile.jpg" width="40" height="40" /></Link></li>
					</ul>	
				</nav>
		</Content>
	)
}