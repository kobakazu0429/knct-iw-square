import React, { FC, useCallback, ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: any;
}

export const TextField: FC<Props> = ({ onChange, value }) => {
  const changeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) onChange(newValue);
  }, []);

  return (
    <Wrapper>
      <Input type="text" onChange={changeValue} value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  border-bottom: 2px solid #bbb;
  padding: 0 8px 6px 8px;
  &::before,
  &::after {
    content: "";
    height: 5px;
    width: 2px;
    position: absolute;
    bottom: 0;
    background-color: #bbb;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

const Input = styled.input`
  font-size: 18px;
  width: 100%;
  color: #111;
  font-weight: bold;
  outline: none;
`;
