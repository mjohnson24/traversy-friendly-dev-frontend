import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import type { PostMeta } from "~/types";
import type { Route } from "./+types/details";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error("Failed to fetch posts data");

  const index = await res.json();

  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if (!postMeta) throw new Response("Post not found", { status: 404 });

  // Dynamically import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
}

type BlogPostDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta;
    markdown: string;
  };
};

const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { postMeta, markdown } = loaderData;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">
        {postMeta.title}
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(postMeta.date).toDateString()}
      </p>

      <div className="prose prose-invert max-w-none mb-12">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

      <Link to="/blog" className="text-blue-400 hover:underline">
        🠔 Back to Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailsPage;
