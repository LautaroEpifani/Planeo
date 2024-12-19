import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  icon?: ReactNode; 
  title: string;
  subtitle?: string; 
  description?: string; 
  className?: string; 
} & ComponentProps<'section'>; 

function Section(props: SectionProps) {
  const { 
    icon, 
    title, 
    subtitle, 
    description, 
    className, 
    children, 
    ...rest 
  } = props;

  // Ajuste del padding y la clase de fondo
  const classes = twMerge(
    "py-2 px-4 my-3 ",  
    "rounded-lg shadow-md", 
    className
  );

  return (
    <section {...rest} className={classes}>
      <div className="flex md:flex-col flex-row md:items-center items-start gap-3"> 
        {icon && <div className="text-xl">{icon}</div>} 
        <div>
          <h2 className="text-2xl font-medium py-3 text-center md:text-left">{title}</h2> 
          {subtitle && <h3 className="text-lg font-bold py-1 text-center md:text-left">{subtitle}</h3>} 
          {description && <p className="text-base text-justify  md:text-left pb-3">{description}</p>} 
        </div>
      </div>
      {children && <div className="mt-2">{children}</div>} 
    </section>
  );
}

export default Section;
