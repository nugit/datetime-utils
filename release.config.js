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
    '@semantic-release/github',
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
