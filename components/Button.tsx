import tw, { styled } from 'twin.macro'

interface IButtonProps {
  variant?: 'primary' | 'secondary'
  position?: 'center' | 'right'
  isWide?: boolean
}

const Button = styled.button(({ variant, position, isWide }: IButtonProps) => [
  tw`uppercase px-8 py-2 transform duration-500`,

  tw`hocus:(scale-[1.01] bg-dark text-primary)`,

  variant === 'primary' && tw`
    bg-primary
    text-btnBlack
    border-black
    font-interExtraBold
    font-extrabold
    text-[14px]
    leading-[26px]
  `,

  variant === 'secondary' && [
    tw`bg-dark text-white`,
  ],

  position === 'center' && tw`mx-auto`,

  !isWide ? tw`text-sm` : tw`w-full max-w-[442px] min-h-[80px] flex justify-center items-center`
])

export default Button
