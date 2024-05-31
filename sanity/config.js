import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2024-03-11",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
};

export const sanityClient = createClient(config);