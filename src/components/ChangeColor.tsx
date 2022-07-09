import { Component } from 'solid-js';
import { IoColorPalette } from 'solid-icons/io';
import { changeColorArray, draw } from './FractalClock';

const ChangeColorButton: Component = () => (
  <button
    onClick={(e) => {
      e.preventDefault();
      changeColorArray();
      draw(); // 更改颜色后重绘一帧以在暂停时刷新
    }}
  >
    <IoColorPalette size={24} />
  </button>
);

export default ChangeColorButton;
