import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'sentirsebien.spa',
  appName: 'Sentirse Bien Spa',
  webDir: 'build',
  plugins: {
    DeepLinks: {
      schemes: ['myapp'],
    },
  },
};

export default config;
