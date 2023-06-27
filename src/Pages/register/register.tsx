import { useState, ChangeEvent, MouseEvent } from "react";
import { Container, Input, Form } from "./styleRegister";
import { RegisterService } from "../../services/apiRegister";
import { useNavigate } from "react-router-dom";
import {ValuesR} from "../../services/types"

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState<ValuesR>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ValuesR>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues((prevent) => ({
      ...prevent,
      [name]: value,
    }));
  };

  const handleRegister = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setErrors({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    if (values.name === "") {
      setErrors((prevent) => ({
        ...prevent,
        name: "Favor digitar o nome",
      }));
    }

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

    if (values.confirmPassword === "") {
      setErrors((prevent) => ({
        ...prevent,
        confirmPassword: "Favor confirmar a senha",
      }));
    }

    if (
      values.name === "" ||
      values.email === "" ||
      values.password === "" ||
      values.confirmPassword === ""
    ) {
      return;
    }

    try {
      const result = await RegisterService(values);
      navigate("/");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Container>
      <div className="h1"> Arnia Trello</div>

      <div className="h2"> Cadastro</div>

      <Form>
        <Input>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            placeholder="Nome completo"
            name="name"
            required
            onChange={handleChange}
          />
        </Input>

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

        <Input>
          <label htmlFor="confirmPassword">Repita sua senha</label>
          <input
            type="password"
            placeholder="Repita sua senha"
            name="confirmPassword"
            required
            onChange={handleChange}
          />
        </Input>
      </Form>

      <button type="submit" onClick={handleRegister}>
        CADASTRAR
      </button>

      {error !== "" && <h1>{error}</h1>}
    </Container>
  );
}
