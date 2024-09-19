import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'fashion-world',
  exposes: {
    './Component': './apps/fashion-world/src/app/app.component.ts',
  },
};

export default config;
