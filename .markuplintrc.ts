import type { Config } from '@markuplint/ml-config';

const config: Config = {
  extends: ['markuplint:recommended'],
  parser: {
    '\\.jsx$': '@markuplint/jsx-parser',
  },
  specs: {
    '\\.jsx$': '@markuplint/react-spec',
  },
  rules: {
    'required-h1': false,
  },
};

export default config;
