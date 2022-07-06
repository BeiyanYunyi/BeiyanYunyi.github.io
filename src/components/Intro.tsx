import { Component } from 'solid-js';
import darkMode from '../utils/darkMode';
import Links from './Links';

const Intro: Component = () => (
  <>
    <img
      src={`https://github-readme-stats.vercel.app/api?username=lixiang810&show_icons=true${
        darkMode.dark() ? '&theme=dark' : ''
      }`}
    />
    <div class="prose prose-zinc">
      <blockquote>天才无法安居光滑或是粗糙的世界之中，只能凝视着这样的世界。</blockquote>
      <p>
        现在是 <a href="https://github.com/Dustella">Dustella</a> 的女朋友。
      </p>
      <p>🏴️‍🅰️反对俄罗斯对乌克兰的侵略，支持乌克兰人民及其政府军队的反侵略斗争。</p>
      <Links />
    </div>
  </>
);

export default Intro;
