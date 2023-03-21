import { Bebas_Neue, Inter as InterFont } from '@next/font/google'

export const BebasNeue = Bebas_Neue({
    variable: '--font-bebasNeue',
    display: 'swap',
    weight: "400",
    subsets: ['latin']
});

export const Inter = InterFont({
    variable: '--font-inter',
    display: 'swap',
    weight: "400",
    subsets: ['latin']
});

export const InterExtraBold = InterFont({
    variable: '--font-interExtraBold',
    display: 'swap',
    weight: "800",
    subsets: ['latin']
});
  