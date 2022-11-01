/// <reference types="vitest" />

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],

  server: {
    // host: 'localhost',
    port: 3002,
  },
  resolve: {
    alias: [
      { find: '@/', replacement: 'src/' }
    ],
    extensions: ['.js', '.ts', '.tsx'],
  },
  test: {
    // https://cn.vitest.dev/config/#globals 默认情况下，vitest 不显式提供全局 API
    globals: true,
    alias: [
      { find: '@/', replacement: 'src/' }
    ],
    // include: [
    //   '**/__tests__/search/**/*.ts',
    //   '**/__tests__/sort/**/*.ts'
    // ],
    exclude: [
      // defaults
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*',
      // custom
      '**/backup/**',
    ]
  }
})
