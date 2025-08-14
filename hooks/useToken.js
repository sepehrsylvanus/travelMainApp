import { useQuery } from "@tanstack/react-query";

export const useFetchToken = () => {
  return useQuery({
    queryKey: ["fetchToken"],
    queryFn: async () => {
      const token = await fetchToken();
      return token;
    },
  });
};
