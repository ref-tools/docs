// Find anchor with text "Powered by Mintlify" and modify its text

document.querySelectorAll('a').forEach(anchor => {
  if (anchor.textContent.trim() === 'Powered by Mintlify') {
    anchor.textContent = 'Mintlify';
    
    // Create a separate anchor for Ref with same styles as Mintlify anchor
    const refAnchor = document.createElement('a');
    refAnchor.textContent = 'Ref.';
    refAnchor.href = 'https://ref.tools';
    refAnchor.target = '_blank';
    refAnchor.rel = 'noopener noreferrer';
    
    // Copy all classes and styles from the original anchor
    refAnchor.className = anchor.className;
    refAnchor.style.cssText = anchor.style.cssText;
    // Set custom font for Ref anchor
    refAnchor.style.fontFamily = 'Libre Baskerville, serif';
    refAnchor.style.fontSize = '1em';
    
    // Create a styled span for the "+" separator
    const plusSpan = document.createElement('span');
    plusSpan.textContent = '+';
    plusSpan.className = anchor.className;
    plusSpan.style.cssText = anchor.style.cssText;
    // Add spacing around the plus sign
    plusSpan.style.margin = '0 0.5em';
    
    // Add the styled " + " span and the Ref anchor after the Mintlify anchor
    anchor.insertAdjacentElement('afterend', plusSpan);
    plusSpan.insertAdjacentElement('afterend', refAnchor);
  }
});
