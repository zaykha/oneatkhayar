import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig ({
    base:'/oneatkhayar/',
    build:{
        chunkSizeWarningLimit: 1600,
        plugins: [splitVendorChunkPlugin()]
    }
})