import { useForm } from "react-hook-form";
import styles from "./ReactHookForm.module.css";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../../schemas/loginSchema";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { inputsRegister } from "../../utils/inputsRegister";
import { LoginData } from "../../types/types";

function ReactHookForm() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const { register, handleSubmit, formState, reset } = useForm<LoginData>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const { errors, isValid } = formState;
  function onSubmit(data: LoginData) {
    login(data).then(() => navigate("/board"));
    reset();
  }
  

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        {inputsRegister.map(({ name, placeholder, type }) => {
          return (
            <Input
              key={name}
              styles={styles}
              error={errors[name]}
              placeholder={placeholder}
              type={type}
              {...register(name)}
            />
          );
        })}
        <button disabled={!isValid} className={styles.submitButton}>
          Regístrate, ¡es gratis!
        </button>
      </div>
    </form>
  );
}

export default ReactHookForm;
