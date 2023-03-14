module.exports = {
  ci: {
    assert: {
      assertions: {
        'csp-xss': 'warn',
        'largest-contentful-paint': 'warn',
        'resource-summary:document:size': ['warn', { maxNumericValue: 100_000 }],
        'resource-summary:font:count': ['warn', { maxNumericValue: 1 }],
        'resource-summary:third-party:count': ['warn', { maxNumericValue: 5 }],
      },
      preset: 'lighthouse:no-pwa',
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
      target: 'temporary-public-storage',
    },
  },
}
