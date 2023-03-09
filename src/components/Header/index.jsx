import Link from "next/link"
import Image from "next/image"
import { Content } from "./style"

export default function Header() {
	return (
		<Content>
			<h1><Link href="#"><span>SUAP</span></Link></h1>
			<nav>
				<ul>
					<li><Link href="/mensage">Notificações</Link></li>
					<li className="dropdown">
						<Image src="/profile.jpg" width="40" height="40" />
						<div className="drop">
							<Link href="">Programas</Link>
							<Link href="">Boletim</Link>
							<Link href="">Avaliações</Link>
							<Link href="">TCC</Link>
							<Link href="">Histórico</Link>
							<Link href="">FAQ</Link>
							<Link href="">Seu Campus</Link>
							<Link href="">Calendário</Link>
						</div>
					</li>
  			</ul>
			</nav>
		</Content>
	)
}