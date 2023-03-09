import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Container, Table } from "@/styles/message"

export default function Mensage() {
	return (
		<>
			<Header />
			<Container>
				<h1>Mensagem</h1>
				<div className="filter">
					<p>Procure sua notificação</p>
					<input type="text" />
					<p>Mensagens não lidas</p>
					<p>Mensagens lidas</p>
					
				</div>
				<div className="table">
					<Table>
						<tbody>
							<tr>
								<td>Reunião com os pais</td>
								<td></td>
								<td><Link href="">Acessar</Link></td>
							</tr>

							<tr>
								<td>Reunião com os pais</td>
								<td></td>
								<td><Link href="">Acessar</Link></td>
							</tr>

							<tr>
								<td>Reunião com os pais</td>
								<td></td>
								<td><Link href="">Acessar</Link></td>
							</tr>

							<tr>
								<td>Reunião com os pais</td>
								<td></td>
								<td><Link href="">Acessar</Link></td>
							</tr>
						</tbody>
					</Table>
				</div>
			</Container>
			<Footer />
		</>

	)
}