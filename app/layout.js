// import './global.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'remixicon/fonts/remixicon.css'
import '../app/css/nav.css'
import '../app/css/page1.css'
import '../app/css/footer.css'
import '../app/css/profile.css'
import './global.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import Wrapper from '@/Components/wrapper/Wrapper'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
