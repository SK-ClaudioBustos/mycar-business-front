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
      '@components/*': "/src/components/*",
      '@utils/*': "/src/utils/*",
      '@type/*': "/src/types/*",
      '@services/*': "/src/services/*",
      '@icons/*': "/src/icons/*",
      '@context/*': "/src/context/*",
      '@store/*': "/src/store/*",
      '@pages/*': "/src/pages/*"
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  server: {
    port: 3000,
  },
})
