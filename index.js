module.exports = {
    extends: [ 'eslint-config-neoeslint', 'prettier'],
    env: {
        browser: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    globals: {
        sap: true,
        jQuery: true,
        describe: true,
        it: true,
        before: true,
        Promise: true,
        after: true
    },
    rules: {
        'no-var': 'warn',
        'block-scoped-var': 'warn',
        'brace-style': [2, '1tbs', {
            'allowSingleLine': true
        }],
        
        'consistent-this': 'error',
        'no-div-regex': 'error',
        'no-floating-decimal': 'error',
        'no-self-compare': 'error',
        'no-mixed-spaces-and-tabs': ['error', true],
        'no-nested-ternary': 'warn',
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'none'
            }
        ],
        'radix': 'error',
        'keyword-spacing': 'error',
        'space-unary-ops': 'error',
        'wrap-iife': ['error', 'any'],
        'camelcase': 'warn',
        'consistent-return': 'warn',
        'max-nested-callbacks': ['warn', 3],
        'new-cap': 'warn',
        'no-extra-boolean-cast': 'warn',
        'no-lonely-if': 'warn',
        'no-new': 'warn',
        'no-new-wrappers': 'warn',
        'no-redeclare': 'warn',
        'no-unused-expressions': 'warn',
        'no-use-before-define': ['warn', 'nofunc'],
        'no-warning-comments': 'warn',
        'strict': 'warn',
        'valid-jsdoc': [
            'warn',
            {
                'requireReturn': false
            }
        ],
        'default-case': 'warn',
        'dot-notation': 'off',
        'eol-last': 'off',
        'eqeqeq': 'off',
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'off',
        'quotes': 'off',
        'key-spacing': 'off',
        'comma-spacing': 'off',
        'no-multi-spaces': 'off',
        'no-shadow': 'off',
        'no-irregular-whitespace': 'off'
 
    }
  };
