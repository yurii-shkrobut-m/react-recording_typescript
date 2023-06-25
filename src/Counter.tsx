import React from "react";

interface Props {
  value: number;
  onChange?: (value: number) => void;
};

export const Counter: React.FC<Props> = ({
  value,
  onChange = () => {},
}) => (
  <div className="box">
    <button onClick={() => onChange(value - 1)}>-</button>
    {value}
    <button onClick={() => onChange(value + 1)}>+</button>
  </div>
);
