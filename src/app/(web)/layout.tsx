import GoogleAnalytics from '@/components/common/GoogleAnalytics';
import IntroVideo from '@/components/common/IntroVideo';

export default function WebLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <GoogleAnalytics />
      <IntroVideo />
      {children}
    </>
  );
}
