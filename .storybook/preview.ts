import type { Preview } from '@storybook/react';
import { withCenterLayout } from './decorators';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [withCenterLayout],
};

export default preview;
