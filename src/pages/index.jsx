import { Container, Box, Card } from "@/styles/Login";
import Link from "next/link";

export default function Login() {
	return (
		<main>
			<Container>
				<Card>
					<Box>
						<h1>SUAP</h1>
						<form action="">	
							<label>Matricula :</label><br />
							<input type="text" /><br />
							<label>Senha :</label><br />
							<input type="password" />

							<div className="submit">
								<input type="submit" value="Entrar"/>
							</div>
							<Link href="">Esqueci a senha</Link>
						</form>
					</Box>
				</Card>
			</Container>
		</main>
	);
}
