const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/images/3.jpg',
      },
	  {
        name: '飞',
        artist: '王恩信Est / 二胖u',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
        cover: '/images/4.jpg',
    },
      {
        name: '悟',
        artist: '刘德华',
        url: '/music/刘德华-悟.ape',
        cover: '/images/4.jpg'
    },
      {
        name: '大悲咒',
        artist: '印能法师',
        url: '/music/大悲咒印能法师.mp3',
        cover: '/images/4.jpg',

    }
    ]
});

