import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig ({
    build:{
        chunkSizeWarningLimit: 1600,
        plugins: [splitVendorChunkPlugin()]
    }
})