import { getTravels } from "@/actions/travel";
import { useQuery } from "@tanstack/react-query";

export const useGetTravels = (category, offset) => {
  return useQuery({
    queryKey: ["getTravels", category, offset],
    queryFn: async ({ queryKey }) => {
      const [_, category, offset] = queryKey;

      const travels = await getTravels(category, offset);
      return travels;
    },
  });
};
