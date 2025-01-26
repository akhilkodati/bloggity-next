import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
}

const BlogCard = ({ id, title, description, date }: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card-hover"
    >
      <Card className="h-full">
        <CardHeader>
          <div className="space-y-1">
            <span className="text-sm text-muted-foreground">{date}</span>
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            onClick={() => navigate(`/blog/${id}`)}
            className="w-full"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;