import { Metadata } from 'next';
import './globals.css';
import AuthProvider from '@/components/auth/AuthProvider';

export const metadata: Metadata = {
  title: 'Goggle - 바둑 이야기를 담다',
  description: '당신의 바둑 여정을 영원히 간직하세요',
  icons: {
    icon: '/favi.svg',
    apple: '/favi.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}