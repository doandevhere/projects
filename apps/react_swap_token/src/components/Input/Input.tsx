import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value?: string | number;
};

const NUMBER_REGEX = /[^0-9]/g;

const replaceNonNumber = (value: string) => value.replace(NUMBER_REGEX, "");
const isInputTooLong = (value?: string | number) => {
  if (!value) return false;

  return String(value).length > 20;
};

const formatNumber = (value: string, separator = ",") => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, type, onChange, value: restValue, ...rest } = props;

  const [value, setValue] = useState<string | number | undefined>(restValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      e.target.value = replaceNonNumber(e.target.value);
      e.target.value = formatNumber(e.target.value);
    }

    setValue(e.target.value);
    onChange?.(e);
  };

  return (
    <input
      ref={ref}
      value={value}
      className={cn(className, {
        "text-2xl": isInputTooLong(value),
      })}
      onChange={handleChange}
      {...rest}
    />
  );
});

export default Input;
