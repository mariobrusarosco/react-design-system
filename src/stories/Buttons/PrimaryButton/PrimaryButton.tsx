import React from "react";

export interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton: React.FunctionComponent<PrimaryButtonProps> = ({
  text,
}) => <button>{text}</button>;

export default PrimaryButton;
