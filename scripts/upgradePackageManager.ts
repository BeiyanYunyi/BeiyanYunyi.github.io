/* eslint-disable */
import fs from 'fs/promises';
import path from 'path';
import semver from 'semver';

const getPackageInfo = async () => {
  const resStr = (await fs.readFile(path.join(process.cwd(), 'package.json'))).toString();
  const res: { packageManager: string | undefined } & Record<string, any> = JSON.parse(resStr);
  return res;
};

const getInfo = async (pmName: string, version: string) => {
  const res = (await (await fetch(`https://registry.npmjs.org/${pmName}/${version}`)).json()) as {
    version: string;
  } & Record<string, any>;
  return res;
};

(async () => {
  const packageInfo = await getPackageInfo();
  if (!packageInfo.packageManager) return console.log('No package manager was found');
  const currentVersion = /\d+\.\d+\.\d/.exec(packageInfo.packageManager)![0];
  const pmName = /(npm|yarn|pnpm)/.exec(packageInfo.packageManager)![0];
  const latest = await getInfo(pmName, 'latest');
  if (currentVersion === latest.version) return console.log('No upgrade available');
  console.log(`New version available: ${pmName}@${currentVersion} -> ${pmName}@${latest.version}`);
  if (!semver.satisfies(latest.version, `^${currentVersion}`)) {
    console.log(
      `However, the latest version is ${pmName}@${latest.version}, which is not satisfied by ${pmName}@^${currentVersion}`,
    );
    return console.log('Upgrade aborted, you should upgrade manually');
  }
  packageInfo.packageManager = `${pmName}@${latest.version}`;
  await fs.writeFile(
    path.join(process.cwd(), 'package.json'),
    JSON.stringify(packageInfo, null, 2),
  );
  return console.log(`${pmName}@${latest.version} is now the current package manager`);
})();
