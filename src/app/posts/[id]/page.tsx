// src/app/posts/[id]/page.tsx

'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Comments from '../../components/Comments'; // Import the Comments component
import Image from 'next/image';

function PostContent({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

// Define the structure of each post (for TypeScript)
interface Post {
  title: string;
  content: string;
}

const posts: Record<string, Post> = {
  '1': { 
    title: 'HTML',
    content: `
      <h2 class="font-bold text-white text-2xl underline decoration-1 ">Understanding HTML</h2>
      <p class="mt-2" >At GIAIC, we, as new learners, understand that every website or application we see on the internet is built on a solid foundation—HTML (HyperText Markup Language).</p>
      <p class="mt-2" >It’s the basic structure language that shapes the skeleton of every web page. Our faculty emphasizes the importance of mastering HTML because, without it, creating any structure for a website or application is impossible.</p>
      
      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
      
      <h2 class="font-bold text-white text-2xl underline decoration-1 ">Why is Learning HTML Important?</h2>
      <p class="mt-2" >HTML is the first step in our journey toward becoming skilled web developers. Here are a few reasons why learning HTML is crucial:</p>
      <p class="mt-2" >1- Building the Structure</p>
      <p class="mt-1" >Just like a building needs a blueprint, every website needs a structure. HTML provides the tags and elements that form the framework of a web page.</p>
      <p class="mt-2" >2- Compatibility with Other Technologies</p>
      <p class="mt-1" >HTML works alongside CSS for styling and JavaScript for interactivity. Without HTML, these technologies wouldn't have a base to work on.</p>
      <p class="mt-2" >3- Universal Language for the Web</p>
      <p class="mt-1" >It’s a universal standard used by every developer, making it essential to learn and understand.</p>
      <p class="mt-2" >4- Step into Advanced Topics</p>
      <p class="mt-1" >Whether it's building a static website or working with frameworks like React or Next.js, HTML is always the starting point.</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

      <h2 class="font-bold text-white text-2xl underline decoration-1 ">How Does HTML Work?</h2>
      <p class="mt-1" >HTML works through a system of tags, which define the structure and content of a webpage. Each tag is enclosed in angle brackets (<>) and usually has an opening tag (e.g., &lt;p&gt;) and a closing tag (e.g., &lt;/p&gt;). The content goes in between these tags.</p>
      
      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

      <h2 class="font-bold text-white text-2xl underline decoration-1 ">HTML Examples</h2>
      <p class="mt-1" >1- 1. A Simple Webpage Structure</p>
      <p class="mt-2" >
&lt;!DOCTYPE html&gt; <br>
&lt;html&gt; <br>
&lt;head&gt; <br>
&lt;title&gt;My First Webpage&lt;/title&gt; <br>
&lt;/head&gt; <br>
&lt;body&gt; <br>
    &lt;h1&gt;Welcome to GIAIC!&lt;/h1&gt;<br>
    &lt;p&gt;We are learning HTML as the foundation of web development.&lt;/p&gt;
&lt;/body&gt; <br>
&lt;/html&gt; <br>

      </p>
      <p class="mt-2 font-bold text-2xl" >Welcome to GIAIC!</p>
      <p class="mt-2 font-bold" >Explanation:</p>
      <p class="mt-2" >&lt;html&gt;: The root element of the page.</p>
      <p class="mt-2" >&lt;/head&gt;: Contains meta information about the page, like the title.</p>
      <p class="mt-2" >&lt;body&gt;: Contains the main content displayed to the user.</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

      <h2 class="font-bold text-white text-2xl underline decoration-1 ">2. Adding Links</h2>
      <p class="mt-2" >
      &lt;a href="https://www.giaic.com" target="_blank"&gt;Visit GIAIC Website&lt;/a&gt;

      </p>
      <p class="mt-2" >&lt;a&gt;: Creates a hyperlink.</p>
      <p class="mt-2" >href: Specifies the link's destination.</p>
      <p class="mt-2" >target="_blank": Opens the link in a new tab.</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

      <h2 class="font-bold text-white text-2xl underline decoration-1 ">3. Creating a List</h2>
      <p class="mt-2" >
      &lt;ul&gt; <br>
          &lt;li&gt;Learn HTML&lt;/li&gt; <br>
          &lt;li&gt;Master CSS&lt;/li&gt; <br>
          &lt;li&gt;Understand JavaScript&lt;/li&gt; <br>
      &lt;/ul&gt;

      </p>
      <p class="mt-2 font-bold" >Explanation:</p>
      <p class="mt-2" >&lt;ul&gt;: Unordered list.</p>
      <p class="mt-2" >&lt;li&gt;: List items within the list.</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

      <h2 class="font-bold text-white text-2xl underline decoration-1 ">Why We Can't Build Without HTML</h2>
      <p class="mt-2">Think of HTML as the bones of a body. Without it, there would be no structure to hold everything in place. Even with advanced technologies, HTML remains the backbone of every project. Whether designing a personal portfolio or working on a professional web application, it all begins with understanding HTML.</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

      <p class="mt-2">Please check more details in url address.</p>
      <p class="mt-2">HTML: https://html.spec.whatwg.org</p>
      <p class="mt-2">(This is the official specification maintained by the WHATWG.)</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
    `,
  },
  '2': {
    title: 'CSS',
    content:`

    <h2 class="font-bold text-white text-2xl underline decoration-1 ">CSS – The Styling Powerhouse After HTML</h2>
    <p class="mt-2">At GIAIC, as new learners stepping into the world of web development, we understand that CSS (Cascading Style Sheets) plays a crucial role in creating engaging and visually appealing websites. After mastering the structure of a web page with HTML, the next essential step is learning CSS to bring that structure to life.</p>

    <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

    <h2 class="font-bold text-white text-2xl underline decoration-1 ">Why is CSS Important?</h2>

    <p class="mt-2">HTML lays the foundation of a web page by defining its structure, but without CSS, it would look plain and unappealing—like a building with no paint or decor. CSS is the language of styling that transforms a basic structure into a beautifully crafted web page or application.</p>
    <p class="mt-2 font-bold">Here’s why CSS is indispensable:</p>
    <p class="mt-2 font-bold">1- Enhances Visual Appeal:</p>
    <p class="mt-2">CSS allows us to add colors, fonts, backgrounds, and spacing, making websites more attractive and professional.</p>
    <p class="mt-2 font-bold">2- Responsive Design:</p>
    <p class="mt-2">With CSS, we can create layouts that adapt to different screen sizes, ensuring websites look great on desktops, tablets, and smartphones.</p>
    <p class="mt-2 font-bold">3- Better User Experience:</p>
    <p class="mt-2">Proper styling improves usability by guiding users’ attention to important elements and making navigation intuitive.</p>
    <p class="mt-2 font-bold">4- Consistency Across Pages:</p>
    <p class="mt-2 font-bold">CSS makes it easy to apply consistent styling across multiple pages, ensuring a seamless user experience.</p>

    <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

    <h2 class="font-bold text-white text-2xl underline decoration-1 ">Examples of CSS in Action</h2>
    <p class="mt-2">Here are some basic ways CSS can transform your web pages:</p>
    <p class="mt-2 font-bold">Example 1- Add Colors and Fonts:</p>
    <p class="mt-2">

    body { <br>
    background-color: lightblue; <br>
    font-family: Arial, sans-serif; <br>
    color: black; <br>
}
    </p>
    <p class="mt-2">This code sets a light blue background, uses the Arial font, and makes text color black.</p>



    <p class="mt-2 font-bold">Example 2- Center Content on the Page:</p>
    <p class="mt-2">
    div { <br>
    margin: 0 auto; <br>
    text-align: center; v
    width: 50%; <br>
}

    </p>
    <p class="mt-2">This centers a &lt;div&gt; horizontally and aligns its text.</p>
    <p class="mt-2 font-bold">Example 3- Create a Button Hover Effect:</p>
    <p class="mt-2">

    button:hover { <br>
    background-color: green; <br>
    color: white; <br>
    transform: scale(1.1); <br>
}

    </p>
    <p class="mt-2">This makes a button change color and grow slightly when hovered over.</p>

    <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
    <h2 class="font-bold text-white text-2xl underline decoration-1 ">Conclusion</h2>

    <p class="mt-2">As GIAIC students, we aim to build web pages that are both functional and visually captivating. Mastering CSS is essential to achieve this goal. In today’s world, where the internet serves as a platform for showcasing skills and attracting opportunities, knowing how to style websites is an invaluable skill—especially for those exploring careers as freelancers.</p>
    <p class="mt-2">Start with the basics of CSS, experiment with styling, and create designs that leave a lasting impression. Remember, a beautifully styled website speaks volumes about the creativity and professionalism of its developer.</p>
    <p class="mt-2 font-bold text-xl text-yellow-300">CSS is not just a skill; it’s an art form that empowers us to make the web more beautiful and user-friendly!</p>

    <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

    <p class="mt-2">Please check more details in url address.</p>
      <p class="mt-2">CSS: https://www.w3.org/Style/CSS/</p>
      <p class="mt-2">(This is maintained by the W3C, the official standards body for CSS.)</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

    `
  },
  '3': {
    title: 'TYPESCRIPT',
    content: `

    <h2 class="font-bold text-white text-2xl underline decoration-1 ">The Importance of TypeScript <br> in the New Era of Programming</h2>

    <p class="mt-2">As GIAIC students stepping into the world of modern web development, we are constantly learning new and advanced technologies that shape the future of programming. One such technology that has gained immense popularity in recent years is TypeScript.</p>

    <p class="mt-2">Before we began exploring TypeScript, we first learned JavaScript, the foundational programming language of the web. JavaScript is dynamic, flexible, and widely used, but as applications grew larger and more complex, the challenges of managing and maintaining code became evident. This is where TypeScript comes into play.</p>
    <p class="mt-2">In the fast-evolving world of web development, staying ahead of the curve is essential, and TypeScript has proven to be a powerful tool for developers worldwide. Unlike JavaScript, TypeScript adds static typing to the language, allowing us to catch errors early, write more robust code, and improve the overall development experience. This is particularly valuable as we move from small-scale projects to larger, more complex applications that require greater reliability and maintainability.</p>
    <p class="mt-2">In today’s era, where applications are becoming more complex and the need for collaboration among developers increases, TypeScript has become a necessity. It improves the productivity of development teams, ensures cleaner code, and offers a better understanding of how data flows through an application. For GIAIC students, adopting TypeScript is not just a trend—it is a step toward mastering the advanced programming tools needed in the professional world.</p>
    <p class="mt-2">The future of programming is rooted in advanced technologies like TypeScript. With its strong type system, powerful tooling, and growing community support, TypeScript is paving the way for the next generation of web development. As we learn and master this technology, we are better equipped to create high-quality, scalable applications that meet the demands of the new digital era.</p>
    <p class="mt-2">Embracing TypeScript is not just a choice; it is a necessary step in our journey as developers in the new era of programming. Moving from JavaScript to TypeScript marks a significant leap forward, empowering us to write more reliable and maintainable code that aligns with the needs of modern software development.</p>

    <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
    
    <p class="mt-2">Please check more details in url address.</p>
    <p class="mt-2">TypeScript: https://www.typescriptlang.org</p>
    <p class="mt-2">(The official website for TypeScript, offering documentation, tutorials, and resources.)</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
    
    `,
  },
  '4': {
    title: 'NEXTJS',
    content: `

        <h2 class="font-bold text-white text-2xl underline decoration-1 ">The Importance of Next.js in Modern Web Development</h2>
        <p class="mt-2">As GIAIC students stepping into the world of modern web development, it's crucial for us to learn the latest frameworks that shape the way we build web applications. One such framework that has gained significant attention in recent years is Next.js.</p>
        <p class="mt-2">Next.js is a powerful, open-source framework built on top of React. It allows us to create web applications with server-side rendering (SSR) and static site generation (SSG), ensuring better performance and SEO optimization. With its intuitive structure, Next.js simplifies complex development tasks, enabling developers to build fast and scalable applications with ease.</p>
        <p class="mt-2">In today’s world of web development, it's important to stay up-to-date with the latest technologies. Next.js stands out because it offers a full-stack solution, allowing us to design not only web pages but also complex applications, all within a single platform. The ability to create dynamic, SEO-friendly web pages while using React makes it a vital tool for building modern websites and apps that are optimized for performance and user experience.</p>
        <p class="mt-2">For GIAIC students and new learners, learning Next.js opens up exciting possibilities in the field of web development. As the demand for fast, scalable, and user-friendly applications increases, mastering frameworks like Next.js will set us apart in the competitive job market.</p>
        <p class="mt-2 font-bold">Conclusion: </p>
        <p class="mt-2">Embracing Next.js as part of our learning journey is crucial. It equips us with the skills needed to build modern web applications and provides a deeper understanding of how to optimize web performance, scalability, and SEO—all of which are essential in today's digital landscape.</p>

        <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

        <p class="mt-2">Please check more details in url address.</p>
        <p class="mt-2">Next.js: https://nextjs.org</p>
        <p class="mt-2">(The official website for Next.js, a React framework for building modern web applications.)</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
        `,
  },
  '5': {
    title: 'TAILWIND CSS',
    content: `
        <h2 class="font-bold text-white text-2xl underline decoration-1 ">The Importance of Tailwind CSS for GIAIC Students</h2>
        <p class="mt-2">As GIAIC students, we are constantly learning new tools and technologies to enhance our web development skills. One of the most powerful tools we've encountered in the world of CSS is Tailwind CSS. In the fast-paced environment of modern web development, Tailwind CSS offers an innovative approach to styling that has quickly become essential for creating beautiful, responsive websites with minimal effort.</p>
        <p class="mt-2">Tailwind CSS is a utility-first CSS framework that allows developers to build custom designs directly in the HTML. Instead of writing long, custom CSS classes, we use a set of predefined utility classes to style elements on the fly. This approach speeds up the development process, reduces the need for context switching between HTML and CSS, and allows for greater flexibility in creating responsive, mobile-friendly designs.</p>

        <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

        <p class="mt-2">Here’s why Tailwind CSS is important for us as GIAIC students:</p>
        <p class="mt-2 font-bold">1-Simplicity and Efficiency</p>
        <p class="mt-2">Tailwind CSS eliminates the need to write custom styles for every element, making it easy to build complex layouts with just a few utility classes. This reduces the time spent on styling and lets us focus more on the logic and functionality of our web pages.</p>
        <p class="mt-2 font-bold">Example:</p>
        <p class="mt-2">
        &lt;div class="bg-blue-500 text-white p-4 rounded-lg"&gt;
        Welcome to my blog!
        &lt;/div&gt;
        </p>

        <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

        <p class="mt-2 font-bold">2- Responsive Design Made Easy</p>
        <p class="mt-2">Tailwind makes it effortless to create responsive designs. With utility classes for different screen sizes, we can quickly adapt the layout for various devices without writing custom media queries.</p>
        <p class="mt-2 font-bold">Example:</p>
        <p class="mt-2">
        &lt;div class="text-center md:text-left"&gt;<br>
        This text is centered on small screens and aligned left on medium screens.<br>
        &lt;/div&gt;
        </p>

        <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

        <p class="mt-2 font-bold">3-Customizable and Extensible</p>
        <p class="mt-2">Tailwind provides the flexibility to easily customize the design system to fit the needs of our project. Whether it’s adjusting colors, spacing, or fonts, we can configure Tailwind’s settings to match the look and feel we want.</p>
        <p class="mt-2 font-bold">Example:</p>
        <p class="mt-2">
        &lt;button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"&gt;<br>
        Submit<br>
        &lt;/button&gt;
        </p>

        <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
        
        <p class="mt-2 font-bold text-2xl">Conclusion:</p>
        <p class="mt-2">For GIAIC students, learning Tailwind CSS is an essential step in our web development journey. It simplifies the process of styling websites and applications, allowing us to build beautiful, responsive designs with minimal effort. By mastering Tailwind, we can create fast and scalable web applications while focusing on the core functionality rather than worrying about intricate CSS details. Tailwind CSS empowers us to be more efficient, more productive, and more creative as we move forward in our development careers.</p>

        <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>

        <p class="mt-2">Please check more details in url address.</p>
        <p class="mt-2">Tailwind CSS: https://tailwindcss.com</p>
        <p class="mt-2">(The official website for Tailwind CSS, a utility-first CSS framework.)</p>

      <div class="mb-4 border-b-2 border-gray-700 mt-4"></div>
        
        `,
  },
};



export default function Post() {
  // Get the post id from the URL params
  const { id } = useParams();

  // Handle if id is an array (because `useParams` can return an array of string)
  const postId = Array.isArray(id) ? id[0] : id;

  // If the id is invalid or no post exists for the given id, show a "Post not found" message
  if (!postId || !posts[postId]) {
    return (
      <div className="post-container p-4 space-y-6">
        <h2 className="text-3xl font-bold">Post not found!</h2>
        <Link href="/" className="text-blue-500">Back to Home</Link>
      </div>
    );
  }

  const post = posts[postId]; // Get the post from the posts object

  return (

    <div className="main-container flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row content-center justify-center ml-8 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0">
          {/* left Image Section */}
    <div className="image-section">
        <Image src="/img1.png" height={250} width={250} alt="Image 1" className="image-item" />
        <Image src="/img2.png" height={250} width={250} alt="Image 2" className="image-item" />
        <Image src="/img3.png" height={250} width={250} alt="Image 3" className="image-item" />
        <Image src="/img4.png" height={250} width={250} alt="Image 4" className="image-item" />
        <Image src="/img5.png" height={250} width={250} alt="Image 5" className="image-item" />
        <Image src="/img6.png" height={250} width={250} alt="Image 6" className="image-item" />
        <Image src="/img7.png" height={250} width={250} alt="Image 7" className="image-item" />
        <Image src="/img8.png" height={250} width={250} alt="Image 8" className="image-item" />
        <Image src="/img9.png" height={250} width={250} alt="Image 9" className="image-item" />
        <Image src="/img10.png" height={250} width={250} alt="Image 10" className="image-item" />
        <Image src="/img11.png" height={250} width={250} alt="Image 11" className="image-item" />
        <Image src="/img12.png" height={250} width={250} alt="Image 12" className="image-item" />
        <Image src="/img13.png" height={250} width={250} alt="Image 13" className="image-item" />
        <Image src="/img14.png" height={250} width={250} alt="Image 14" className="image-item" />
        <Image src="/img15.png" height={250} width={250} alt="Image 15" className="image-item" />
        <Image src="/img16.png" height={250} width={250} alt="Image 16" className="image-item" />
        <Image src="/img17.png" height={250} width={250} alt="Image 17" className="image-item" />
        <Image src="/img18.png" height={250} width={250} alt="Image 18" className="image-item" />
        <Image src="/img19.png" height={250} width={250} alt="Image 19" className="image-item" />
        <Image src="/img20.png" height={250} width={250} alt="Image 20" className="image-item" />
      </div>

    <div className="post-container p-4 space-y-6 sm:w-2/3 w-full px-4 sm:px-10">
      <h2 className=" text-yellow-300 text-3xl font-bold underline decoration-1 decoration-red-500 text-justify hover:scale-y-150 ">{post.title}</h2>
      <PostContent content={post.content} />

      {/* Add the Comments section */}
      <Comments />

      {/* Back link */}
      <Link href="/" className="text-green-400 font-extrabold text-2xl underline decoration-2 decoration-red-500 link">Back to All Posts</Link>
    </div>
    
    {/* Right Image Section */}
    <div className="image-section">
        <Image src="/image18.png" height={250} width={250} alt="Image 18" className="image-item" />
        <Image src="/image19.png" height={250} width={250} alt="Image 19" className="image-item" />
        <Image src="/image3.png" height={250} width={250} alt="Image 3" className="image-item" />
        <Image src="/image4.png" height={250} width={250} alt="Image 4" className="image-item" />
        <Image src="/image5.png" height={250} width={250} alt="Image 5" className="image-item" />
        <Image src="/image6.png" height={250} width={250} alt="Image 6" className="image-item" />
        <Image src="/image7.png" height={250} width={250} alt="Image 7" className="image-item" />
        <Image src="/image16.png" height={250} width={250} alt="Image 16" className="image-item" />
        <Image src="/image17.png" height={250} width={250} alt="Image 17" className="image-item" />
        <Image src="/image10.png" height={250} width={250} alt="Image 10" className="image-item" />
        <Image src="/image11.png" height={250} width={250} alt="Image 11" className="image-item" />
        <Image src="/image12.png" height={250} width={250} alt="Image 12" className="image-item" />
        <Image src="/image13.png" height={250} width={250} alt="Image 13" className="image-item" />
        <Image src="/image14.png" height={250} width={250} alt="Image 14" className="image-item" />
        <Image src="/image15.png" height={250} width={250} alt="Image 15" className="image-item" />
        <Image src="/image8.png" height={250} width={250} alt="Image 8" className="image-item" />
        <Image src="/image9.png" height={250} width={250} alt="Image 9" className="image-item" />
        <Image src="/image1.png" height={250} width={250} alt="Image 1" className="image-item" />
      </div>

    </div>
  );
}

