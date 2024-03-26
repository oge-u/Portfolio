// data.js
import { createContext } from 'react';

// Theme context
export const ThemeContext = createContext();

// Theme data
export const themeData = {
    theme: orangeThemeDark // Assuming orangeThemeDark is imported or defined elsewhere
}

// Skills data
export const skillsData = [
    'HTML',
    'Fastify',
    'Blender',
    'Figma',
    'Javascript',
    'CSS',
    'React',
    'Django',
    // Add more skills here as needed
]

// Skills image mapping
export const skillsImage = (skill) => {
    // Image imports
    const images = {
        'html': require('../assets/svg/skills/html.svg'),
        'fastify': require('../assets/svg/skills/fastify.svg'),
        'blender': require('../assets/svg/skills/blender.svg'),
        'figma': require('../assets/svg/skills/figma.svg'),
        'javascript': require('../assets/svg/skills/javascript.svg'),
        'css': require('../assets/svg/skills/css.svg'),
        'react': require('../assets/svg/skills/react.svg'),
        'django': require('../assets/svg/skills/django.svg'),
        // Add more image mappings here as needed
    };

    // Return the corresponding image for the skill
    return images[skill.toLowerCase()] || null;
};
