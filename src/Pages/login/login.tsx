import { useState, ChangeEvent, MouseEvent } from "react";
import { Container, Input, Form, Link as Style } from "./styleLogin";
import { loginService } from "../../services/apiLogin";
import { Link, useNavigate } from "react-router-dom";
import {ValuesL} from "../../services/types"

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState<ValuesL>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<ValuesL>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues((prevent) => ({
      ...prevent,
      [name]: value,
    }));
  };
  console.log(values);

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setErrors({
      email: "",
      password: "",
    });

    if (values.email === "") {
      setErrors((prevent) => ({
        ...prevent,
        email: "Favor digitar o e-mail",
      }));
    }

    if (values.password === "") {
      setErrors((prevent) => ({
        ...prevent,
        password: "Favor digitar a senha",
      }));
    }

    if (values.email === "" || values.password === "") {
      return;
    }

    try {
      const result = await loginService(values);
      navigate("/kanban");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Container>
      <div className="h1"> Arnia Trello</div>

      {error !== "" && <h1>{error}</h1>}

      <Form>
        <Input>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            required
            onChange={handleChange}
          />
        </Input>

        <Input>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            name="password"
            required
            onChange={handleChange}
          />
        </Input>
      </Form>

      <button type="submit" onClick={handleLogin}>
        ENTRAR
      </button>

      <Link to="/register">
        <Style>Cadastre-se</Style>
      </Link>
    </Container>
  );
}
