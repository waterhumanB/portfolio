import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';
import { theme } from '../src/theme/theme';
import { Particles, CustomCursor, FilmGrain } from '../src/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://waterhuman-portfolio.vercel.app'), // 실 배포 주소로 변경 필요
  title: {
    default: '배수인 | Growth Engineer & Frontend Developer',
    template: '%s | 배수인 Portfolio',
  },
  description: '비즈니스 임팩트를 만드는 프론트엔드 개발자, 배수인의 포트폴리오입니다. React, Next.js, 그리고 데이터 기반의 성장을 지향합니다.',
  keywords: ['프론트엔드', '개발자', '배수인', '포트폴리오', 'React', 'Next.js', 'Growth Engineer', '마케팅'],
  authors: [{ name: 'Bae Su-in' }],
  creator: 'Bae Su-in',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://waterhuman-portfolio.vercel.app', // 실 배포 주소로 변경 필요
    title: '배수인 | Growth Engineer & Frontend Developer',
    description: '비즈니스 임팩트를 만드는 프론트엔드 개발자, 배수인의 포트폴리오입니다.',
    siteName: '배수인 Portfolio',
    images: [
      {
        url: '/img/og-image.png', // 이미지 경로 수정됨
        width: 1200,
        height: 630,
        alt: 'Bae Su-in Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '배수인 | Growth Engineer & Frontend Developer',
    description: '비즈니스 임팩트를 만드는 프론트엔드 개발자, 배수인의 포트폴리오입니다.',
    images: ['/img/og-image.png'], // 이미지 경로 수정됨
    creator: '@waterhumanB', // 필요 없으면 삭제 가능
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Particles />
            <CustomCursor />
            <FilmGrain />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
