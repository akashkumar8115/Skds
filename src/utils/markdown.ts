import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "markdown/Blog");

// Type for each post's returned fields
// type PostItem = string | Record<string, unknown> | null;

/**
 * Get all markdown/MDX filenames in the blog folder
 */
export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string, fields: string[] = []): Blog {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Partial<Blog> = {};

  function processImages(content: string): string {
    return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
  }

  fields.forEach((field) => {
    if (field === "slug") {
      items.slug = realSlug;
    }
    if (field === "content") {
      items.content = processImages(content);
    }
    if (field === "metadata") {
      items.metadata = { ...data, coverImage: data.coverImage || null };
    }
    if (typeof data[field] !== "undefined") {
      (items as unknown)[field] = data[field];
    }
  });

  return items as Blog;
}

/**
 * Get all posts and sort them by date (descending)
 */
export function getAllPosts(fields: string[] = []): Blog[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));

  return posts;
}


export interface Blog {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  coverImage?: string;
  content?: string;
  metadata?: Record<string, unknown> | null;
}