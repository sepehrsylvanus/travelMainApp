import { configureStore } from "@reduxjs/toolkit";
import guideSlice from "@/features/openGuide/openGuideSlice";
export const store = configureStore({
  reducer: {
    guide: guideSlice,
  },
});
