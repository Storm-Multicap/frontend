import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  startAdornment?: React.ReactNode
  value: string
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
}) => {
  return (
    <StyledInputWrapper>
      {!!startAdornment && startAdornment}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  align-items: center;
  margin: 30px auto;
  border: 2px solid #ffffff;
  display: flex;
  display: -ms-flex;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  min-height: 72px;
  padding: 10px 15px;
`

const StyledInput = styled.input`
  background: none;
  border: 0;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 18px;
  flex: 1;
  min-height: 56px;
  margin: 0;
  padding: 0;
  outline: none;
  @media (max-width: 580px) {
    text-align: center;
  }
`

export default Input
