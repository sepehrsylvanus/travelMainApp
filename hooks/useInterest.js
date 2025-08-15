import { getInterest } from "@/actions/interest";
import { useQuery } from "@tanstack/react-query";

export const useGetInterest = (show_home) => {
  return useQuery({
    queryKey: ["getInterest", show_home],
    queryFn: async ({ queryKey }) => {
      const [, show_home] = queryKey;

      const interest = await getInterest(show_home);
      return interest;
    },
  });
};
