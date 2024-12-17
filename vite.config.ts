import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(
      {
        svgrOptions: {
          icon: true, // Usa el viewBox para hacer el SVG escalable
          expandProps: 'end', // Expande las props para permitir width, height, fill, etc.
        },
      }
    )],
  resolve: {
    alias: {
      '@': "/src"
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  server: {
    port: 3000, // Cambia el puerto a 3000
  },

})
