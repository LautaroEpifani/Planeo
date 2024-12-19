import { useState } from "react";

// Define el tipo de las props para incluir className
interface FormEmailPageProps {
  className?: string;
}

function FormEmailPage({ className }: FormEmailPageProps) {
  const [formValues, setFormValues] = useState({
    name: '',
  });

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, type, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? event.target.checked : value
    })
  }

  return (
    <div className={`flex flex-col gap-4 sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto ${className}`} >
      <label>
        <input 
          className="border-2 border-sky-500 m-2 ml-11 py-3 pr-20 pl-2 rounded-md text-left" 
          type="email" 
          name='email'
          placeholder="Correo electrónico"
          onChange={handleFormChange}
        />
      </label>
    </div>
  );
}

export default FormEmailPage;