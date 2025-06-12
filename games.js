// Monsters Lovers 游戏数据
const games = [
    {
        id: 'monster-survivors',
        title: 'Monster Survivors',
        desc: 'Survive endless waves of monsters in this thrilling action-packed game. Upgrade your character, collect power-ups, and battle increasingly difficult enemies.',
        thumb: 'monster-survivors-thumb.jpg',
        fallbackThumb: 'https://placehold.co/400x225/6a0dad/white?text=Monster+Survivors',
        url: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
        category: 'action',
        rating: 4.8,
        dateAdded: '2024-02-15',
        premium: true,
        tags: ['action', 'survival', 'upgrade', 'endless']
    },
    {
        id: 'highway-traffic',
        title: 'Highway Traffic',
        desc: 'Navigate through busy highways, avoid traffic, and reach your destination safely. Test your reflexes and strategic thinking in this exciting driving game.',
        thumb: 'highway-traffic-thumb.jpg',
        fallbackThumb: 'https://placehold.co/400x225/ff0000/white?text=Highway+Traffic',
        url: 'https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html',
        category: 'racing',
        rating: 4.5,
        dateAdded: '2024-02-10',
        premium: false,
        tags: ['racing', 'driving', 'traffic', 'reflex']
    },
    {
        id: 'madalin-stunt-cars',
        title: 'Madalin Stunt Cars Pro',
        desc: 'Experience the ultimate stunt driving game with amazing cars, challenging tracks, and spectacular stunts. Master the art of extreme driving!',
        thumb: 'madalin-stunt-cars-thumb.jpg',
        fallbackThumb: 'https://placehold.co/400x225/2196f3/white?text=Madalin+Stunt+Cars',
        url: 'https://www.onlinegames.io/games/2023/unity/madalin-stunt-cars-pro/index.html',
        category: 'racing',
        rating: 4.7,
        dateAdded: '2024-02-12',
        premium: false,
        tags: ['racing', 'stunt', 'cars', 'tricks']
    }
];

// 分类数据
const categories = [
    { id: 'all', name: 'All Games' },
    { id: 'action', name: 'Action' },
    { id: 'racing', name: 'Racing' },
    { id: 'puzzle', name: 'Puzzle' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'arcade', name: 'Arcade' }
];

// 搜索游戏
function searchGames(query) {
    const searchTerm = query.toLowerCase().trim();
    return games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.desc.toLowerCase().includes(searchTerm) ||
        game.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
}

// 按分类获取游戏
function getGamesByCategory(categoryId) {
    if (categoryId === 'all') return games;
    return games.filter(game => game.category === categoryId);
}

// 获取所有分类
function getAllCategories() {
    return categories;
}

// 获取游戏详情
function getGameById(gameId) {
    return games.find(game => game.id === gameId);
}

// 导出模块
export default {
    games,
    categories,
    searchGames,
    getGamesByCategory,
    getAllCategories,
    getGameById
}; 