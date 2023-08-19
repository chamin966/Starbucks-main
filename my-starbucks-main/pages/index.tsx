import Header from '@/components/home/Header';
import Head from 'next/head';
import { Arimo } from 'next/font/google';

const globalFont = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    //헤더 position: fixed 테스트용 높이
    <div className={globalFont.className} style={{ height: '200vh' }}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div>스타벅스 메인 화면 클론 프로젝트</div>
    </div>
  );
}
