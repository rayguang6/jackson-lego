import { renderToString } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';

/**
 * Export a React component to an HTML file
 * @param Component - The React component to export
 * @param props - The props to pass to the component
 * @param filename - The name of the file to save (without extension)
 * @param outputDir - The directory to save the file to
 */
export const exportComponentToHtml = async (
  Component: React.ComponentType<any>,
  props: any,
  filename: string,
  outputDir: string = './exports'
): Promise<string> => {
  // Ensure the output directory exists
  fs.mkdirSync(outputDir, { recursive: true });

  // Render the component to a string
  const componentHtml = renderToString(React.createElement(Component, props));

  // Create a complete HTML document
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exported Component</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  </style>
</head>
<body>
  ${componentHtml}
</body>
</html>`;

  // Write the HTML to a file
  const filePath = path.join(outputDir, `${filename}.html`);
  fs.writeFileSync(filePath, html, 'utf8');

  console.log(`✅ Component exported to ${filePath}`);
  return filePath;
}; 