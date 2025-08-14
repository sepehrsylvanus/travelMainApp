import { getUserPosts } from "@/actions/feed";
import { useQuery } from "@tanstack/react-query";

export const useGetUserPosts = () => {
  return useQuery({
    queryKey: ["getUserPosts"],
    queryFn: async () => {
      const posts = await getUserPosts();
      return posts;
    },
  });
};
