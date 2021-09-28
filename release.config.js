const mainConfig = {
  branches: [
    'master',
    { name: 'develop', channel: 'beta', prerelease: 'beta' },
  ],
  repositoryUrl: 'https://github.com/nugit/datetime-utils.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.version}',
      },
    ],
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

const { execSync } = require('child_process');
const { createHash } = require('crypto');

const branch = execSync('git branch --show-current').toString().trimEnd('\n');
const channel = `alpha.${createHash('md5').update(branch).digest('hex')}`;

const localConfig = {
  branches: [
    'master',
    { name: 'develop', channel: 'beta', prerelease: 'beta' },
    {
      name: branch,
      channel,
      prerelease: channel,
    },
  ],
  repositoryUrl: 'https://github.com/nugit/datetime-utils.git',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    '@semantic-release/npm',
  ],
};

module.exports = process.env.LOCAL_RELEASE ? localConfig : mainConfig;
