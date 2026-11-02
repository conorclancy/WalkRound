import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache yet: the app has no ISR pages. Add an R2/KV cache here
// if we start using revalidated pages (see https://opennext.js.org/cloudflare/caching).
export default defineCloudflareConfig({});
