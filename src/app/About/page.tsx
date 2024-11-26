import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="bg-black text-white text-justify w-full max-w-4xl mx-auto p-4 mt-10">
        <h1 className="text-yellow-300 font-bold text-2xl sm:text-3xl lg:text-4xl lg:underline lg:decoration-1">
          About Us: GIAIC Students&apos; Journey to Excellence
        </h1>
        <p className="mt-2">
          At GIAIC (Global Institute for Advanced IT Concepts), we aim to equip students with the latest skills in web development and technology.
          Our faculty is committed to fostering a learning environment where students can thrive in the digital age. This Next.js application is a reflection of the modern tools and techniques we are mastering, and we&apos;re here to share why these skills are vital.
        </p>

        <h2 className="text-yellow-300 font-bold text-2xl sm:text-2xl lg:text-3xl lg:underline lg:decoration-1 mt-4">
          The Importance of Showcasing Skills Online
        </h2>
        <p className="mt-2">
          In today&apos;s interconnected world, freelancing has become a powerful way to demonstrate your expertise. The internet provides an open platform to connect with global clients and companies. As GIAIC students, we are taught not only to build projects but to present our skills confidently. Whether through personal portfolios or dynamic web applications, showing your capabilities online can open doors to numerous opportunities.
        </p>

        <h2 className="text-yellow-300 font-bold text-xl sm:text-2xl lg:text-3xl lg:underline lg:decoration-1 mt-4">
          Why Freelancing Matters:
        </h2>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Build a global network of clients.</li>
          <li>Gain independence by working on diverse projects.</li>
          <li>Create a personal brand that showcases your expertise.</li>
          <li>
            Our faculty emphasizes the importance of developing skills that go beyond coding—they teach us to communicate our ideas, adapt to client needs, and deliver high-quality work.
          </li>
        </ul>

        <h2 className="text-yellow-300 font-bold text-xl sm:text-2xl lg:text-3xl lg:underline lg:decoration-1 mt-4">
          Key Features of Our Next.js Application
        </h2>
        <p className="mt-2">
          Our Next.js project includes several essential features that showcase our skills in modern web development:
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-green-500 font-bold text-lg underline decoration-1">1. Dynamic Blog</h3>
            <p>A dynamic blog allows content to update seamlessly, making it easier to share ideas and stories in real-time. As future developers, we learn how to use dynamic data to create engaging experiences for users.</p>
          </div>
          <div>
            <h3 className="text-green-500 font-bold text-lg underline decoration-1">2. Multiple Posts</h3>
            <p>Creating a platform that handles multiple posts teaches us how to manage content efficiently. This skill is invaluable for building blogs, news sites, and content-driven platforms.</p>
          </div>
          <div>
            <h3 className="text-green-500 font-bold text-lg underline decoration-1">3. Next.js Routing</h3>
            <p>Routing is at the heart of web applications. Our faculty ensures we understand how to implement efficient routing in Next.js, which enhances user navigation and improves app performance.</p>
          </div>
          <div>
            <h3 className="text-green-500 font-bold text-lg underline decoration-1">4. Comments Section</h3>
            <p>A comments section brings interactivity to a website, enabling user feedback and engagement. This feature highlights our ability to implement real-time functionalities that connect users with content.</p>
          </div>
          <div>
            <h3 className="text-green-500 font-bold text-lg underline decoration-1">5. Links</h3>
            <p>Links are the backbone of any web application. We learn how to create intuitive navigation systems that guide users seamlessly through the app.</p>
          </div>
          <div>
            <h3 className="text-green-500 font-bold text-lg underline decoration-1">6. Button Components</h3>
            <p>Buttons may seem simple, but they are critical for user interactions. Designing responsive, accessible buttons demonstrates our attention to detail and user experience.</p>
          </div>
        </div>

        <h2 className="text-yellow-300 font-bold text-xl sm:text-2xl lg:text-3xl underline decoration-1 mt-4">
          Why These Skills Are Important
        </h2>
        <p className="mt-2">
          Each feature we develop has real-world applications:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Dynamic Content helps businesses stay relevant.</li>
          <li>Efficient Routing ensures better user experiences.</li>
          <li>Interactive Features like comments foster community engagement.</li>
          <li>Reusable Components like buttons and links save development time.</li>
        </ul>
        <p className="mt-2">
          By mastering these, we are preparing ourselves for careers as freelancers and developers who can build robust and user-friendly applications.
        </p>

        <h2 className="text-yellow-300 font-bold text-xl sm:text-2xl lg:text-3xl underline decoration-1 mt-4">
          A Note to Our Readers
        </h2>
        <p className="mt-2">
          Dear readers, the world of technology is vast, but the skills we acquire at GIAIC make us confident to face challenges. With guidance from our dedicated faculty and the projects we develop, we are ready to show the internet what we can create.
        </p>
        <p className="mt-2">
          If you are passionate about technology, we encourage you to take the leap, start building, and make your mark in the digital world.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 space-y-4 sm:space-y-0">
          <Link href="/">
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-pink-500 transition hover:scale-110 font-bold">
              Home
            </button>
          </Link>
          <Link href="/Contact">
            <button className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-pink-500 transition hover:scale-110 font-bold">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
