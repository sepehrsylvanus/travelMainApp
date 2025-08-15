import { getAllPosts, getUserPosts } from "@/actions/feed";
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
export const useGetPublicPosts = (travel, offset = 0) => {
  return useQuery({
    queryKey: ["getPublicPosts", travel, offset],
    queryFn: async ({ queryKey }) => {
      const [, travel, offset] = queryKey;
      const publicPosts = await getAllPosts(travel, offset);
      console.log("🚀 ~ useGetPublicPosts ~ publicPosts:", publicPosts);
      return publicPosts;
    },
  });
};
