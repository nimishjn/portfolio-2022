import { UsernamePasswordAuthJSProvider, TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";
import { testimonialCollection } from "./collections/testimonial";
import { aboutCollection } from "./collections/about";
import { achievementCollection } from "./collections/achievement";
import { certificateCollection } from "./collections/certificate";
import { educationCollection } from "./collections/education";
import { experienceCollection } from "./collections/experience";
import { otherCollection } from "./collections/other";
import { projectCollection } from "./collections/project";
import { researchCollection } from "./collections/research";
import { skillCollection } from "./collections/skill";
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";
export default defineConfig({
    contentApiUrlOverride: "/api/tina/gql",
    authProvider: isLocal ? new LocalAuthProvider() : new UsernamePasswordAuthJSProvider(),
    branch,
    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            TinaUserCollection,
            aboutCollection,
            achievementCollection,
            certificateCollection,
            educationCollection,
            experienceCollection,
            otherCollection,
            projectCollection,
            researchCollection,
            skillCollection,
            testimonialCollection
        ]
    },
    search: {
        tina: {
            indexerToken: process.env.TINA_SEARCH_TOKEN,
            stopwordLanguages: ["eng"],
        },
        indexBatchSize: 100,
        maxSearchIndexFieldLength: 100,
    },
});
