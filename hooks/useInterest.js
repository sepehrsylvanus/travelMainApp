import { getInterest } from "@/actions/interest";
import { useQuery } from "@tanstack/react-query";

export const useGetInterest = () => {
  return useQuery({
    queryKey: ["getInterest"],
    queryFn: async () => {
      const interest = await getInterest();
      return interest;
    },
  });
};
