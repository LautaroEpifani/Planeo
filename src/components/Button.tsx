import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text?: string;
  children?: ReactNode;
  className?: string;
} & ComponentProps<'button'>;

function Button(props: Props) {

  const { text = 'Click', children, className, ...rest } = props;
  
  const classes = twMerge(
    'font-normal border mr-2 px-6 py-3 rounded-lg',
    className
  );

  return (
    <button {...rest}  className={classes}>
      { children || text  }
    </button>
  )
}

export default Button;