import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type Post = PostMeta & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'content', 'blog');
const filePattern = /\.mdx?$/;

function readPost(fileName: string): Post {
  const slug = fileName.replace(filePattern, '');
  const raw = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
  const { data, content } = matter(raw);

  if (!data.title || !data.date) {
    throw new Error(`Missing required "title" or "date" in content/blog/${fileName}`);
  }

  return {
    slug,
    title: String(data.title),
    date: String(data.date).slice(0, 10),
    description: data.description ? String(data.description) : '',
    content,
  };
}

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => filePattern.test(fileName))
    .map((fileName) => {
      const { content: _content, ...meta } = readPost(fileName);
      return meta;
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getPost(slug: string): Post | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const fileName = fs.readdirSync(postsDirectory).find((name) => name.replace(filePattern, '') === slug);
  return fileName ? readPost(fileName) : null;
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
