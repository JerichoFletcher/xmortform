'use client';

import './Prompt.css';
import React from 'react';

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
