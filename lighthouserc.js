module.exports = {
  ci: {
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: '/*',
          preset: 'lighthouse:no-pwa',
          assertions: {
            'csp-xss': 'warn',
            'largest-contentful-paint': 'warn',
            'resource-summary:document:size': ['warn', { maxNumericValue: 100_000 }],
            'resource-summary:font:count': ['warn', { maxNumericValue: 1 }],
          },
        },
        {
          matchingUrlPattern: '/support',
          assertions: {
            'resource-summary:document:size': ['warn', { maxNumericValue: 200_000 }],
            'resource-summary:font:count': ['warn', { maxNumericValue: 2 }],
          },
        },
      ],
    },
    collect: {
      settings: {},
      numberOfRuns: 5,
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/pricing',
        'http://localhost:3000/support',
      ],
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'ready - started server on 0.0.0.0:3000, url: http://localhost:3000',
      startServerReadyTimeout: 500,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.ofadiman.dev',
      token: 'f7445a36-8f63-471d-8234-b5a583e3e93b',
    },
  },
}
