// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const posts = [
    { id: '1', title: '1- HTML' },
    { id: '2', title: '2- CSS' },
    { id: '3', title: '3- TYPESCRIPT' },
    { id: '4', title: '4- NEXTJS' },
    { id: '5', title: '5- TAILWIND CSS' },
  ];

  return (
    <div>
      <h2 className="text-center text-2xl md:text-5xl text-green-500 mt-16 md:mt-24 underline decoration-red-500 decoration-dashed font-bold hover:scale-150">
        Welcome to My Blog
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 px-4 md:px-16">
        {/* Text List on the Left */}
        <ul className="text-yellow-300 font-bold text-lg md:text-2xl underline decoration-2 decoration-purple-400 space-y-4 md:space-y-6 mb-8 md:mb-0">
          {posts.map((post) => (
            <li key={post.id} className="hover:scale-y-125">
              <Link href={`/posts/${post.id}`} className="block">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Single Image on the Right */}
        <Image
          src="/laptop1.png" // Replace with the actual path to your laptop image
          alt="Laptop"
          width={300}
          height={300}
          className="w-[250px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[400px] rounded-lg hover:scale-110"
        />
      </div>
    </div>
  );
}
