"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchToken } from "@/actions/auth";
import { getUserProfile } from "@/actions/user";

const Page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const func = async () => {
      const userData = await getUserProfile();
      setUser(userData);
    };
    func();
  }, []);

  // Fallback data if user data is missing or incomplete
  const displayUser = {
    FirstName: user?.FirstName || "John",
    LastName: user?.LastName || "Doe",
    Introduction:
      user?.Introduction ||
      "Hey there! I'm excited to explore and connect with new friends!",
    BirthDate: user?.BirthDate || "1990-01-01",
    ChatID: user?.ChatID || "Unknown",
    Score: user?.Score || 0,
    profileImage: user?.Images?.[0] || "https://picsum.photos/200/200",
  };

  // Calculate age from BirthDate
  const calculateAge = (birthDate) => {
    if (!birthDate) return "Unknown";
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      return age - 1;
    }
    return age;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {!user ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-6">
            <Image
              src={displayUser.profileImage}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-blue-100"
            />
            <h1 className="text-2xl font-bold mt-4 text-gray-800">
              {displayUser.FirstName} {displayUser.LastName}
            </h1>
            <p className="text-sm text-gray-500">
              Chat ID: {displayUser.ChatID}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">About Me</h2>
            <p className="text-gray-600 mt-2">{displayUser.Introduction}</p>
          </div>

          {/* Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Details</h2>
            <div className="mt-2 space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Age:</span>{" "}
                {calculateAge(displayUser.BirthDate)}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Score:</span> {displayUser.Score}{" "}
                points
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Status:</span>{" "}
                {user?.IsOnline ? "Online" : "Offline"}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4">
            <button
              className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() => router.push("/edit-profile")}
            >
              Edit Profile
            </button>
            <button
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              onClick={() => router.push("/friends")}
            >
              View Friends
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
