import { getUserProfile } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["getUserProfile"],
    queryFn: async () => {
      const userProfile = await getUserProfile();
      return userProfile;
    },
  });
};
