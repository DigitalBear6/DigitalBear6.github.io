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
        url: 'http://lc-GPvduXCJ.cn-n1.lcfile.com/iEnqNbLaKrwf5gx3NxNJDTR0cbHUlObL/%E5%A4%A7%E6%82%B2%E5%92%92%E5%8D%B0%E8%83%BD%E6%B3%95%E5%B8%88.mp3',
        cover: '/images/4.jpg'
    },
      {
        name: '大悲咒',
        artist: '印能法师',
        url: 'http://lc-GPvduXCJ.cn-n1.lcfile.com/iEnqNbLaKrwf5gx3NxNJDTR0cbHUlObL/%E5%A4%A7%E6%82%B2%E5%92%92%E5%8D%B0%E8%83%BD%E6%B3%95%E5%B8%88.mp3',
        cover: '/images/4.jpg',

    }
    ]
});

