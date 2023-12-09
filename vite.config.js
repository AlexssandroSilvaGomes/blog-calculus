import { defineConfig } from 'vite'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    imagePresets({
      thumbnail: widthPreset({
        class: 'img thumb',
        loading: 'lazy',
        widths: [48, 96],
        formats: {
          webp: { quality: 50 },
          jpg: { quality: 70 },
        },
      }),
    }),
  ],
})
