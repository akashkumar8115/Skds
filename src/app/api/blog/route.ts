import { NextRequest, NextResponse } from "next/server";

// Define the Blog Post type
interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  slug: string;
}

// Sample in-memory data store (replace with database in production)
let blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introduction to UI/UX Design",
    description: "Learn the basics of UI/UX design for modern web applications.",
    content: "This is a sample blog post content about UI/UX design...",
    date: "2025-08-01",
    slug: "introduction-to-ui-ux-design",
  },
  {
    id: "2",
    title: "Branding Tips for Small Businesses",
    description: "Top strategies to build a strong brand identity.",
    content: "This is a sample blog post content about branding...",
    date: "2025-08-02",
    slug: "branding-tips-for-small-businesses",
  },
];

// GET: Fetch all blog posts or a specific post by slug
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (slug) {
      // Fetch a single post by slug
      const post = blogPosts.find((post) => post.slug === slug);
      if (!post) {
        return NextResponse.json(
          { error: "Blog post not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(post, { status: 200 });
    }

    // Fetch all posts
    return NextResponse.json(blogPosts, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST: Create a new blog post
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, content, slug } = body;

    // Validate required fields
    if (!title || !description || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new post
    const newPost: BlogPost = {
      id: String(blogPosts.length + 1),
      title,
      description,
      content,
      date: new Date().toISOString().split("T")[0],
      slug,
    };

    // Add to in-memory store (replace with database save in production)
    blogPosts.push(newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}