module.exports = {
  ci: {
    assert: {
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
