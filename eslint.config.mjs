import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },  
  {
    rules: {
      // Estilo de Código      
      'indent': ['error', 2], // Indentação de 2 espaços
      'quotes': ['error', 'single', { 'avoidEscape': true }], // Aspas simples, exceto se for necessário escapar
      'semi': ['error', 'always'], // Sempre usar ponto e vírgula
      'comma-dangle': ['error', 'always-multiline'], // Vírgula no final de listas e objetos multilineares
      'object-curly-spacing': ['error', 'always'], // Espaço entre chaves de objetos: { a: 1 }
      'array-bracket-spacing': ['error', 'never'], // Sem espaço em colchetes de arrays: [1, 2]
      'arrow-parens': ['error', 'always'], // Parênteses sempre em arrow functions: (param) => {}

      // Outras regras úteis
      'no-console': 'warn', // Aviso ao usar console.log para debug
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Ignora variáveis com prefixo "_"
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ignores: [
      'node_modules/',   // Ignora o diretório node_modules
      'dist/',           // Ignora o diretório dist
      'build/',          // Ignora o diretório build
      '*.min.js',        // Ignora arquivos minificados
      'src/legacy-code/', // Ignora código legado em src
    ],
  },
];