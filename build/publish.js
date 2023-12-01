import utils from './utils';
import { version } from './config';
import chalk from "chalk";

const publishUfin123 = async version => {
  try {
    await utils.run(
      'npm',
      ['publish', '-registry', 'http://192.168.0.239:8081/repository/npm-hosted/'],
      {
        cwd: utils.resolve('./'),
        stdio: 'pipe',
      },
    );
    console.log(chalk.green(`Successfully published  v${version}`));
  } catch (e) {
    console.log();
    throw e;
  }
};

// 主函数
async function main() {
  publishUfin123(version);
}

main().catch(err => {
  console.error(err);
});
