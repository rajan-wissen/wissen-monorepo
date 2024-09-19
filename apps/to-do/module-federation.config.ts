import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'to-do',
  exposes: {
    './Component': './apps/to-do/src/app/app.component.ts',
  },
};

export default config;
