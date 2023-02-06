import { Component } from 'solid-js';
import darkMode from '../utils/darkMode';
import Links from './Links';

const Intro: Component = () => (
  <>
    <div class="prose prose-zinc rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow backdrop-blur hover:backdrop-blur-sm transition-all duration-200 backdrop-filter">
      <img
        src={`https://github-readme-stats.vercel.app/api?username=BeiyanYunyi&show_icons=true${
          darkMode.dark() ? '&theme=dark' : ''
        }&bg_color=00000000&hide_border=1`}
      />
    </div>
    <div class="flex flex-col gap-2">
      <div class="prose prose-zinc rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow p-4 backdrop-blur hover:backdrop-blur-sm transition-all duration-200 backdrop-filter">
        <blockquote>天才无法安居光滑或是粗糙的世界之中，只能凝视着这样的世界。</blockquote>
      </div>
      <div class="prose prose-zinc rounded-md shadow-md shadow-neutral-200 dark:shadow-dark-900 hover:shadow p-4 backdrop-blur hover:backdrop-blur-sm transition-all duration-200 backdrop-filter">
        <p>
          现在是 <a href="https://github.com/Dustella">Dustella</a> 的女朋友。
        </p>
        <p>🏴️‍🅰️反对俄罗斯对乌克兰的侵略，支持乌克兰人民及其政府军队的反侵略斗争。</p>
        <Links />
      </div>
    </div>
  </>
);

export default Intro;
