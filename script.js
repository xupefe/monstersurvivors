// Monsters Lovers 游戏网站脚本
import gamesData from './games.js';

// 仅保留游戏展示（iframe）相关逻辑，去除搜索、分类、排序、全屏切换等多余功能

// 状态管理
let currentGame = gamesData.games[0]; // 默认展示第一个游戏

// 显示游戏（iframe）
function showGame(game) {
    const iframe = document.getElementById('game-frame');
    if (iframe) {
        iframe.src = game.url;
    }
}

// 初始化：默认展示第一个游戏
(function init() {
    showGame(currentGame);
})(); 