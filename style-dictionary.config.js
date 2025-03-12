import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const StyleDictionary = require('style-dictionary');

const config = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: './styles/', // Tailwind의 styles 폴더에 출력
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables'   // :root { --variable: value; } 형식
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
};

StyleDictionary.extend(config).buildAllPlatforms();