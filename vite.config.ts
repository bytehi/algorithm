import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],

  server: {
    // host: 'localhost',
    port: 3002,
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.ts', '.tsx'],
  },
})
