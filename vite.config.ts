
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-tabs', '@radix-ui/react-dialog'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          social: ['src/components/social/OptimizedSocialSection.tsx', 'src/components/social/OptimizedInstagramPosts.tsx'],
          maps: ['src/components/OptimizedMapSection.tsx']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: mode === 'production' ? 'terser' : false,
    terserOptions: mode === 'production' ? {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      },
      mangle: {
        safari10: true
      }
    } : undefined,
    chunkSizeWarningLimit: 500,
    target: ['es2015', 'chrome61', 'safari11', 'firefox60'],
    cssTarget: ['chrome61', 'safari11', 'firefox60']
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: []
  },
  esbuild: {
    target: 'es2015'
  }
}));
