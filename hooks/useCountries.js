import { getContinents } from "@/actions/homepage";
import { useQuery } from "@tanstack/react-query";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["getCountries"],
    queryFn: async () => {
      const countries = await getContinents();
      return countries;
    },
  });
};
