import Link from 'next/link';

const posts = [
  { id: 1, title: 'First Blog Post', description: 'This is the first blog post.' },
  { id: 2, title: 'Second Blog Post', description: 'This is the second blog post.' },
];

export default function Home() {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
