'use client';

import React from 'react';
import './Prompt.css';

export default function Prompt({
  children, required
}: Readonly<{
  children: React.ReactNode;
  required?: boolean;
}>) {
  return (
    <div id="prompt-container">
      {required && <p id="label-required">Required</p>}
      <p id="prompt-text">
        {children}
      </p>
    </div>
  );
}
