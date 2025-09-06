"use client";
import { useState, useRef } from "react";
// Removed useRouter from "next/navigation" as it is not supported in this environment
import {
  User,
  Star,
  Book,
  Heart,
  Briefcase,
  Globe,
  Utensils,
  Sun,
  Camera,
  ChevronLeft,
  CalendarDays,
  Gauge,
  CircleCheck,
  Plane,
  Home,
  GraduationCap,
  Sparkles,
  Smile,
  CircleDot,
  Cigarette, // Corrected import for the smoking icon
  GlassWater,
  Building2,
  Dna,
  Handshake,
  HeartHandshake,
  Users,
  Martini,
  Apple,
  Cross,
  BookOpenText,
  Mountain,
  Brush,
  Gamepad,
  Car,
  Swords,
  Footprints,
  Earth,
  HandCoins,
  Church,
  Tornado,
  Waves,
  Palette,
  Mic,
  Music,
  Tent,
} from "lucide-react";

export default function EditProfilePage() {
  // const router = useRouter(); // Disabled due to "next/navigation" as it is not supported in this environment

  const [fullName, setFullName] = useState("John Smith");
  const [birthday, setBirthday] = useState("1990-05-15");
  const [profileImage, setProfileImage] = useState("");
  const [localGuideInterests, setLocalGuideInterests] = useState([
    "Show around town",
    "Give local advice",
  ]);
  const [gender, setGender] = useState("Male");
  const [interests, setInterests] = useState([
    "Reading",
    "Traveling",
    "Photography",
  ]);
  const [smoke, setSmoke] = useState("No, I don't");
  const [travel, setTravel] = useState(["Solo", "Couple"]);
  const [education, setEducation] = useState("Bachelor's Degree");
  const [languages, setLanguages] = useState(["Spanish", "French"]);
  const [countries, setCountries] = useState(["Italy", "France", "Germany"]);
  const [drink, setDrink] = useState("Once a month");
  const [diet, setDiet] = useState("Mix of everything");
  const [religion, setReligion] = useState("Christianity");
  const [fun, setFun] = useState(["Reading books", "Exercising"]);

  const availableLocalGuides = [
    "Show around town",
    "Share home or couch",
    "Give local advice",
    "Meet for coffee or drinks",
  ];

  const availableGenders = ["Male", "Female"];

  const availableInterests = [
    "Reading",
    "Traveling",
    "Cooking",
    "Photography",
    "Hiking",
    "Painting",
  ];

  const availableSmoke = [
    "Yes, I do",
    "No, I don't",
    "Only socially",
    "I'm trying to quit",
  ];

  const availableTravel = [
    "Solo",
    "Couple",
    "Family",
    "Friends",
    "Business",
    "Group",
  ];

  const availableEducation = [
    "High School",
    "Diploma",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Ph.D",
  ];

  const availableLanguages = [
    "Spanish",
    "French",
    "Arabic",
    "Portuguese",
    "German",
  ];

  const availableCountries = [
    "Italy",
    "Tanzania",
    "South Africa",
    "Thailand",
    "Iraq",
    "Iran",
    "Saudi Arabia",
    "France",
    "Germany",
    "Turkey",
  ];

  const availableDrink = [
    "I don't drink at all",
    "Once a month",
    "Once a week",
    "Daily",
  ];

  const availableDiet = [
    "I don't follow any specific diet",
    "I'm vegan",
    "I follow a vegetarian diet",
    "Mix of everything",
  ];

  const availableReligion = [
    "Christianity",
    "Islam",
    "Hinduism",
    "Buddhism",
    "Judaism",
    "Other",
    "I am not religious",
  ];

  const availableFun = [
    "Reading books",
    "Exercising",
    "Football",
    "Video games",
    "Cars",
    "Exploring",
    "Sports",
  ];

  // State for alerts
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  // A reference to the hidden file input element
  const fileInputRef = useRef(null);

  // Function to handle the file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file and set it as the profile image
      const newImageUrl = URL.createObjectURL(file);
      setProfileImage(newImageUrl);
    }
  };

  // Function to trigger the hidden file input
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Toggle for multi-select
  const toggleMulti = (setter, value, current) => {
    if (current.includes(value)) {
      setter(current.filter((i) => i !== value));
    } else {
      setter([...current, value]);
    }
  };

  // Select for single-choice
  const selectSingle = (setter, value, current) => {
    setter(current === value ? "" : value);
  };

  // Mock submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      fullName,
      birthday,
      profileImage,
      localGuideInterests,
      gender,
      interests,
      smoke,
      travel,
      education,
      languages,
      countries,
      drink,
      diet,
      religion,
      fun,
    };
    console.log("Mock update:", payload);

    if (Math.random() > 0.2) {
      showAlert("success", "Profile updated successfully!");
      // Simulate going back without using router
      setTimeout(() => window.history.back(), 2000);
    } else {
      showAlert("failure", "Failed to update profile. Please try again.");
    }
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  // Simple alert component
  const Alert = ({ type, message }) => (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-xl shadow-lg ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      } z-50`}
    >
      {message}
    </div>
  );

  const Section = ({ title, icon: Icon, children }) => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-gray-600" />
        <label className="text-sm font-medium text-gray-700">{title}</label>
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-screen bg-white font-inter overflow-y-auto">
      {alert.show && <Alert type={alert.type} message={alert.message} />}

      <div className="flex items-center justify-between w-full p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <button
          onClick={() => window.history.back()}
          className="text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Edit Profile</h1>
        <div className="w-6"></div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-gray-200">
            {profileImage ? (
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm mb-2">
                  <Camera size={32} className="text-gray-500" />
                </div>
                <span className="text-base text-gray-500 font-medium">
                  Add your image
                </span>
              </div>
            )}
            {/* The hidden file input field */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <button
              type="button"
              onClick={handleImageClick} // Clicking this button will trigger the hidden file input
              className="absolute inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity bg-black/50 text-white flex items-center justify-center text-sm font-medium"
            >
              Change
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Birthday</label>
          <input
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>

        <Section title="Local Guide interests" icon={HeartHandshake}>
          {availableLocalGuides.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                toggleMulti(setLocalGuideInterests, item, localGuideInterests)
              }
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                localGuideInterests.includes(item)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="What's your gender?" icon={Users}>
          {availableGenders.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectSingle(setGender, item, gender)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                gender === item
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="Add Your Interests" icon={Sparkles}>
          {availableInterests.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleMulti(setInterests, item, interests)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                interests.includes(item)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="Do you Smoke?" icon={Cigarette}>
          {availableSmoke.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectSingle(setSmoke, item, smoke)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                smoke === item
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="How do you Travel?" icon={Plane}>
          {availableTravel.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleMulti(setTravel, item, travel)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                travel.includes(item)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section
          title="What is your highest level of education?"
          icon={GraduationCap}
        >
          {availableEducation.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectSingle(setEducation, item, education)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                education === item
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="Languages you know" icon={Mic}>
          {availableLanguages.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleMulti(setLanguages, item, languages)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                languages.includes(item)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="How many countries have you been?" icon={Earth}>
          {availableCountries.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleMulti(setCountries, item, countries)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                countries.includes(item)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="How often do you drink?" icon={Martini}>
          {availableDrink.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectSingle(setDrink, item, drink)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                drink === item
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="What kind of diet do you follow?" icon={Apple}>
          {availableDiet.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectSingle(setDiet, item, diet)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                diet === item
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="What religion do you follow?" icon={Cross}>
          {availableReligion.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectSingle(setReligion, item, religion)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                religion === item
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <Section title="What do you like to do for fun?" icon={Smile}>
          {availableFun.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleMulti(setFun, item, fun)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 border ${
                fun.includes(item)
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item}
            </button>
          ))}
        </Section>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium p-4 rounded-xl active:scale-95 duration-300 shadow-sm mt-6 mb-8"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
