# Kids Activity Apps

A suite of interactive, educational flashcard applications designed to help kids learn Maths, English, Malayalam, and Time reading.

## Release Notes

### Version 2026.04.27

**Maths Flashcards:**
- **New Feature: "Numbers up to" Mode**: Added a new generation mode that allows creating flashcards for all operations up to a specified maximum number.
- **Bug Fix**: Addressed a visual glitch where flashcard contents would update *before* the card finished flipping back to the front. Now, the new question loads only after the card is fully flipped.
- **Text-to-Speech Enhancements**: Forced the TTS engine to default to `en-US` to ensure consistent and clear pronunciation of equations.

**English Flashcards:**
- **Simplified TTS Selection**: Cleaned up the text-to-speech voice selection logic for better cross-device compatibility.
- **Interaction Enhancements**: Improved the touch interaction flow for reading words, revealing hints, and navigating between cards.

**Global & System Changes:**
- **Global Analytics**: Integrated Microsoft Clarity and Google Analytics across all pages to track performance and usage metrics.
- **Unified Theming System**: Extracted theme definitions into a centralized `themes.js` file. The dropdown theme selector is now globally standardized across the Maths, English, Malayalam, and Time flashcard apps, ensuring a cohesive look and feel.
- **Global App Navigation**: Added a persistent bottom navigation bar to seamlessly switch between the different learning tools.
- **Central Index**: Introduced a central `index.html` hub for easy access to all activities.