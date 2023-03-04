import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Content, Table } from "@/styles/home"

export default function Home() {
	return (
		<>
			<Header />
			<Content>
				<h1>Olá, Rafael !</h1>
				<Image src="/profile.jpg" width="200" height="200" />
				<ul class="tabs" role="tablist">
					<li>
						<input type="radio" name="tabs" id="tab1" />
						<label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">Dados pessoais</label>
						<div id="tab-content1" class="tab-content" role="tabpanel"	aria-labelledby="description" aria-hidden="false">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						</li>
						<li>
							<input type="radio" name="tabs" id="tab2" />
							<label for="tab2" role="tab" aria-selected="false" aria-controls="panel2" tabindex="0">Sua turma</label>
							<div id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="specification" aria-hidden="true">
								<Table>
									<thead>
										<tr>
											<th>Código</th>
											<th>Nome da matéria</th>
											<th>Acesso</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>

										<tr>
											<td>InfoMat</td>
											<td>Matemática</td>
											<td><Link href="">Acessar</Link></td>
										</tr>
									</tbody>
								</Table>
							</div>
						</li>
				</ul>
			</Content>
			<Footer />
		</>
	)
}