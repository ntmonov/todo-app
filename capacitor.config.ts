import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.todoApp',
  appName: 'todo-app',
  webDir: 'dist/todo-app/browser',
  server: {
    hostname: 'localhost',
    cleartext: true
  }
};

export default config;
