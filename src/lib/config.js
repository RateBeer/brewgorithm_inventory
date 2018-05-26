const cconfig = require('cconfig')

const defaultConfig = {
    // Defaults
    // --------
    PORT: 3000,

    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    isStaging: process.env.NODE_ENV === 'staging',
    isProduction: process.env.NODE_ENV === 'production',

    /*
      # Overrides

      The following sections will cascade over the default values based on the current environment
    */
    test: {

    },

    development: {

    },

    staging: {

    },

    production: {

    }
}

const preFinalConfig = cconfig(defaultConfig)

/*
  Everything that comes in from command line is a string,
  if you need a type, convert it here by the key name
*/

const finalConfig = Object.keys(preFinalConfig).reduce((finalConfig, key) => {
    let value = preFinalConfig[key]

    switch (key) {
        case 'PORT':
            value = parseInt(value, 10)
            break

        default:
            break
    }

    finalConfig[key] = value
    return finalConfig
}, {})

module.exports = finalConfig
