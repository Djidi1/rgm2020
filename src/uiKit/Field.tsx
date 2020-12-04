import React, { FC } from 'react';
import { Field as FormikField } from 'formik';
import styled from 'styled-components';

type MainProps = {
  type: string,
  formik?: boolean,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  label?: string,
  name?: string,
  placeholder?: string,
  className?: string,
  options?: string[],
};

const Label = styled.label`
    color: #f65261;
    text-transform: uppercase;
    font-size: 0.9rem;
`;

// id: 1607065154583

const FormikFieldType = ({
  type, className, name, placeholder, options,
}) => (type === 'select'
  ? (
    <FormikField
      as={type}
      className={className}
      name={name}
      placeholder={placeholder}
      multiple
    >
      {options.map((option) => <option key={option}>{option}</option>)}
    </FormikField>
  ) : (
    <FormikField
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
    />
  ));

const field: FC<MainProps> = ({
  formik = false,
  type,
  name,
  label,
  value,
  onChange,
  placeholder,
  className,
  options,
  ...props
}) => (
  <>
    {label && <Label>{label}</Label>}
    {!formik ? (
      <input
        className={className}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    )
      : (
        <FormikFieldType
          className={className}
          name={name}
          type={type}
          placeholder={placeholder}
          options={options}
        />
      )}
  </>
);

const Field = styled(field)`
  color: #fff;
  background: #424242;
  border: none;
  border-radius: 3px;
  margin: 0.5em 0;
  padding: 1em 1em;
  flex: 1;
  font-size: 1rem;
  ::placeholder {
    color: #555;
  }
`;

export default Field;
