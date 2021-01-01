import { useState } from "react";
import { RegisterState } from "../types";
import { api } from "../utils/auth/api";
import { useDispatch } from "react-redux";
import { LOADING, SUCCESS, ERROR } from "../state/actions/userActions";
import { useHistory } from "react-router-dom";

const initialForm = {
  username: "",
  email: "",
  password: "",
};

export const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterState>(initialForm);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api()
      .post("/api/users/register", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: SUCCESS, payload: res.data.user });
        push("/");
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err.message });
        console.log(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input onChange={handleChange} name="email" value={form.email} />
        </label>
        <label>
          Username:
          <input
            onChange={handleChange}
            name="username"
            value={form.username}
          />
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            name="password"
            value={form.password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};