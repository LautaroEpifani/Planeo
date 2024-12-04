import { ComponentProps, useId, forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  styles: { [key: string]: string };
  type?: string;
  label?: string;
  error: FieldError | undefined;
  placeholder?: string;
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  const { type, label, error, styles, placeholder, ...rest } = props;

  const id = useId();

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={styles.inputField}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {error && <span className={styles.spanError}>{error.message}</span>}
    </div>
  );
});

export default Input;
