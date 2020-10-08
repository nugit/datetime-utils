module.exports = {
  branches: [
    'master',
    {
      name: 'develop',
      prerelease: 'beta',
    },
    {
      name: 'alpha',
      prerelease: 'alpha',
    },
  ],
  repositoryUrl: 'https://github.com/nugit/datetime-utils.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
        ],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/github', {
        assets: [
          { path: 'lib/nugit-datetime-utils.cjs.js', label: 'Common JS build' },
          { path: 'lib/nugit-datetime-utils.esm.js', label: 'ESM build' },
          { path: 'lib/nugit-datetime-utils.umd.js', label: 'UMD build' },
        ],
      },
    ],
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true,
        markdownReleaseNotes: true,
      },
    ],
  ],
};
