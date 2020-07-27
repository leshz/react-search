import * as React from "react";

export const useInputValue = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  const [isError, setError] = React.useState(false);
  const onChange = (e, type = null) => {
    const { value } = e.target;
    if (type !== null && value !== "") {
      isValidInput(value, type);
    }
    setValue(e.target.value);
  };

  const isValidInput = (input: string, type: number): void => {
    const validateText = /^[a-zA-Z]/g;
    const validateNumber = /^[0-9]*$/g;
    let isValid = false;
    switch (type) {
      case 0:
        isValid = !validateText.test(input);
        break;
      case 1:
        isValid = !validateNumber.test(input);
        break;
    }
    setError(isValid);
  };

  return { value, onChange, setValue, isValidInput, isError };
};
