import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-transparent"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
        <article className="prose prose-gray lg:prose-xl max-w-none">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">{post.date}</p>
            <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </div>
          <div className="mt-8">
            <p className="leading-relaxed">{post.content}</p>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPost;