/**
 * Utility functions for processing logo images for the MetallicPaint effect
 */

import { parseLogoImage } from '../components/MetallicPaint';

/**
 * Converts an SVG string to a File object that can be processed by parseLogoImage
 * @param {string} svgString - The SVG content as a string
 * @param {string} fileName - The name to give the file
 * @returns {Promise<Object>} - The processed image data for MetallicPaint
 */
export async function processSvgForMetallicEffect(svgString, fileName = 'logo.svg') {
  // Create a Blob from the SVG string
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  
  // Create a File object from the Blob
  const file = new File([blob], fileName, { type: 'image/svg+xml' });
  
  try {
    // Parse the logo image using the parseLogoImage function
    const result = await parseLogoImage(file);
    return result;
  } catch (error) {
    console.error('Error processing SVG for metallic effect:', error);
    throw error;
  }
}

/**
 * Fetches an SVG file and processes it for the MetallicPaint effect
 * @param {string} svgPath - Path to the SVG file
 * @returns {Promise<Object>} - The processed image data for MetallicPaint
 */
export async function fetchAndProcessSvg(svgPath) {
  try {
    const response = await fetch(svgPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG: ${response.statusText}`);
    }
    
    const svgString = await response.text();
    return processSvgForMetallicEffect(svgString);
  } catch (error) {
    console.error('Error fetching and processing SVG:', error);
    throw error;
  }
}