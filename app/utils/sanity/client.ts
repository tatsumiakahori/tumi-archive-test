import { createClient } from "next-sanity";

export const client = createClient({
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   apiVersion: "2024-03-11",
   useCdn: process.env.NODE_ENV === "production",
   token: process.env.SANITY_API_TOKEN,
  // These settings will be overridden in 
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
