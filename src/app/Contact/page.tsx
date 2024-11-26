// src/app/contact/page.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col items-center p-4 space-y-6 bg-black min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-yellow-300 underline decoration-1 decoration-red-500 hover:scale-125 mb-6 text-center">
        Contact Me
      </h1>
      <p className="text-lg text-white text-center">
        Feel free to reach out for collaborations or job opportunities.
      </p>

      {/* General Information */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mt-10 ">
        <h2 className="text-lg sm:text-2xl font-bold mb-4 text-gray-700 underline decoration-1 decoration-red-500 hover:scale-y-150 text-center">
          Contact Information
        </h2>
        <ul className="space-y-4 text-gray-600">
          <li className='hover:scale-y-150 font-bold'><strong>Name:</strong> Azmat Ali</li>
          <li className='hover:scale-y-150 font-bold'><strong>Email:</strong> azmat36@yahoo.com</li>
          <li className='hover:scale-y-150 font-bold'><strong>Email:</strong> azmat136@hotmail.com</li>
          <li className='hover:scale-y-150 font-bold'><strong>Email:</strong> azmataliakbar@gmail.com</li>
          <li className='hover:scale-y-150 font-bold'><strong>Phone:</strong> 00-92-333-2236799</li>
          <li className='hover:scale-y-150 font-bold'><strong>WhatsApp:</strong> 00-92-333-2236799</li>
          <li className='hover:scale-y-150 font-bold'>
            <strong>LinkedIn:</strong>
            <Link href="https://www.linkedin.com/in/azmat-ali-akbar-3246282b" target="_blank" className="text-blue-500 underline break-words">
              www.linkedin.com/in/azmat-ali-akbar-3246282b
            </Link>
          </li>
        </ul>
      </div>

      {/* Button Links */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-full max-w-md mt-6 justify-center">
        <Link href="/">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-pink-500 transition hover:scale-110 font-bold">
            Home
          </button>
        </Link>
        <Link href="/About">
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-pink-500 transition hover:scale-110 font-bold">
            About Blog
          </button>
        </Link>
      </div>

      {/* Footer */}
      <h4 className="text-gray-500 mt-8 text-center">Author: Azmat Ali</h4>
    </main>
  );
}
