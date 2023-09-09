import { Barlow_Condensed } from 'next/font/google';

const FontBarlow = Barlow_Condensed({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	style: ['italic', 'normal'],
	variable: '--font-barlow'
});

export const fonts = [FontBarlow];
