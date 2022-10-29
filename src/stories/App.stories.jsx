import React from 'react';

import App from './App';

export default {
  title: 'Example/App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <App />;

export const Home = Template.bind();
