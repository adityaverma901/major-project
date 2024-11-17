import Navdash from '@/components/nav-dash';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      
        <title>Inner Voice</title>
        <meta name="description" content="Your safe space to talk, anytime, anywhere" />
      
     
      <Navdash />
        {/* Header */}
        {/* <header className="flex flex-grid top-4 w-full flex justify-between bg-green-950 items-center px-6 text-white">
          <span className="text-xs tracking-widest">YOUR SAFE SPACE TO TALK, ANYTIME, ANYWHERE</span>
          <nav className="flex space-x-4 text-sm">
            <a href="#support" className="hover:text-gray-900">24/7 SUPPORT</a>
            <a href="#about" className="hover:text-gray-900">ABOUT US</a>
            <a href="#profile" className="hover:text-gray-900">PROFILE</a>
          </nav>
        </header> */}
        
        {/* Main Content */}
        <section className="flex flex-col md:flex-row items-center bg-green-200 rounded-lg shadow-lg p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex justify-center">
            {/* Replace this with your SVG image */}
            <Image
              src="/dash-image.png" // Replace with your actual image path
              alt="Two faces illustration"
              width={1500}
              height={300}
              className="rounded-full shadow-lg"
            />
          </div>
          
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">INNER - VOICE</h1>
            <p className="text-gray-700 mb-6">
              "Welcome to Inner Voice, your safe and confidential space to express yourself freely.
              Our AI-driven chatbot is here to support you 24/7, providing personalized guidance and resources
              to help you navigate life's challenges. Whether you need a listening ear or professional advice,
              we're always here, anytime, anywhere."
            </p>
            <Link href="/chatbot">
            <button className="bg-green-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-800 transition">
              TRY NEW CHAT →
            </button>
            </Link>
          </div>
        </section>
    </>
  );
}
