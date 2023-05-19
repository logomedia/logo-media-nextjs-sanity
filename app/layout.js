// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default async function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
