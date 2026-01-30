import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "./login.css";
import background from "../images/background.jpg";
export function Login() {
  const { authenticate, loading, error } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    authenticate(email, senha);
  }


return (
  <section
    className="login-section"
    style={{ backgroundImage: `url(${background})` }}
  >
    <div className="overlay"></div>
    <div>
      <div className="welcome-message">
        <h1 className = "titulo_login" >Tackoff</h1>
        <p className = "paragrafo_login">Seu próximo destino começa aqui</p>
      </div>
      
      <form onSubmit={handleSubmit} className="container-login">
        <h1 className="titulo">Inicie Sua Jornada</h1>
        <input
          className="input-login"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          className="input-login"
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Senha"
        />
        <p className="esqueceu-senha">
          Esqueceu sua senha? <a href="#">Clique aqui</a>
        </p>
        <button className="botao" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
        <p className="cadastre-se">
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
        {error && <p className="erro">{error}</p>}
      </form>
    </div>
  </section>
);

}
