import { generateSillyPassword } from 'silly-password-generator';

import { analyzePassword } from 'silly-password-generator';

// Use with no options to generate a 4-word silly password
generateSillyPassword(); // `thorough loud annoying penguin`

// Provide a custom word count if you'd like
generateSillyPassword({ wordCount: 7 }); // `glamorous large powerful fast black noisy clam`

// Capitalize the first letter of the resulting password
const sillyPassword = generateSillyPassword({ capitalize: true }); // `Curious fluffy excited copperhead`

// You can provide salt to strengthen your passwords, too. Salt is appended to the end.
generateSillyPassword({ salt: "!?!?" }); // `damned important envious pangolin!?!?`



// Returns an object telling you how awesome or crappy your password is.
const results = analyzePassword(sillyPassword); 
console.log(results);
