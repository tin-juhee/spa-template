import React from 'react';

export const withCenterLayout = (Story: React.FC) => (
  <div
    style={{
      minHeight: '240px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      overflowY: 'auto',
    }}
  >
    <Story />
  </div>
);
