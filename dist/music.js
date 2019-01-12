$(document).pjax('a', '#musiclist',{
      timeout: 5000,
	    fragment: '#musiclist',
	    cache: false,
});
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	  lrcType: 3,
    volume: 0.2,
    audio: [
      {
        name: '天ノ弱',
        artist: 'Akie秋绘',
        url: 'http://music.163.com/song/media/outer/url?id=442016694.mp3',
        cover: 'http://p1.music.126.net/uwdmJf5_YTFeTviEEesP-Q==/109951162812015408.jpg',
		    lrc: '/天ノ弱-Akie秋绘.lrc',
      },
	    {
        name: 'you',
        artist: 'M.Graveyard',
        url: 'http://music.163.com/song/media/outer/url?id=786262.mp3',
        cover: 'http://p2.music.126.net/v22kNtMro7CvzoiCYJ4zjQ==/3315027558990599.jpg',
		    lrc: '/you-M.Graveyard.lrc',
      },
      {
        name: 'Bloom of Youth',
        artist: '清水準一',
        url: 'http://music.163.com/song/media/outer/url?id=760058.mp3',
        cover: 'http://p1.music.126.net/BxiuK1_8_RXArdjxOqqUeg==/3382097775018074.jpg',
        lrc: '/Bloom of Youth-清水準一.lrc',
      },
      {
        name: 'A little story（纯钢琴）',
        artist: 'Masque_Jupiter',
        url: 'http://music.163.com/song/media/outer/url?id=786262.mp3',
        cover: 'http://p2.music.126.net/boWhszSsHB1fvQTxtiI98Q==/109951163156134515.jpg',
		    lrc: '/A little story（纯钢琴）-Masque_Jupiter.lrc',
      },
      {
        name: 'Hello,shooting-star',
        artist: 'moumoon',
        url: 'http://music.163.com/song/media/outer/url?id=30251429.mp3',
        cover: 'http://p1.music.126.net/tplflfaOo8WDs4lx3jkhAg==/18755469348405559.jpg',
		    lrc: '/Hello,shooting-star-moumoon.lrc',
      },
      {
        name: '小さな恋のうた',
        artist: '高橋李依',
        url: 'http://music.163.com/song/media/outer/url?id=543612338.mp3',
        cover: 'http://p1.music.126.net/CiZKeVy7WJ9Sc6rfqaV2bQ==/109951163198708163.jpg',
		    lrc: '/小さな恋のうた-高橋李依.lrc',
      },
    ]
});
