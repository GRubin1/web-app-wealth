import React from 'react';
import tw from 'twin.macro';
import { Button } from '../';

export interface ISearchFromProps {
    placeholder?: string
    buttonText?: string
}

export default function SearchForm ({ placeholder, buttonText }: ISearchFromProps) {
  return (
    <FormWrapper>
        <input placeholder={placeholder} />
        <Button variant='secondary'>{buttonText}</Button>
    </FormWrapper>
  );
}

const FormWrapper = tw.div`
    flex
    justify-center
    mb-14
    px-3
    md:px-0

    [input]:(
        w-full 
        font-inter
        font-normal
        text-ellipsis
        max-w-[475px] 
        p-[22px 10px 20px 21px]
        text-[18px]
        leading-[32px]
        md:p-[22px 10px 20px 51px]
    )
`