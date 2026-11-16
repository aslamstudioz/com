import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Aslam Studioz | Your Moments. Timeless Stories.',description:'Wedding, nikah, convocation and event photography in Kandy, Sri Lanka. Explore the portfolio and enquire about your next shoot.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
