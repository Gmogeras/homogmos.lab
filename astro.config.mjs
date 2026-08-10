import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? '';
const isUserSite = repo.endsWith('.github.io');
const onGitHub = Boolean(process.env.GITHUB_ACTIONS);

export default defineConfig({
  output: 'static',
  site: onGitHub && owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: onGitHub && repo && !isUserSite ? `/${repo}` : '/',
  trailingSlash: 'always'
});
