const PATHS = {
  media: './asset/media',
  emoji: './asset/media/emoji',
}

/**
 * @type {User[]}
 */
const USERS = [
  {
    username: 'ﾔｯﾍﾞｰﾅｯｹﾞｰﾕｰｻﾞｰﾒｰｼﾃﾙﾔﾂ',
    pfpPath: `${PATHS.media}/kiha.png`,
    replies: [
      {
        text: 'lmao',
      },
      {
        emojiPath: `${PATHS.emoji}/kekl.png`,
      },
      {
        emojiPath: `${PATHS.emoji}/kekl.png`,
        text: 'lmao',
      },
    ]
  },
  {
    username: 'amongi',
    pfpPath: `${PATHS.media}/shashlik.png`,
    replies: [
      {
        emojiPath: `${PATHS.emoji}/xD.png`,
      },
      {
        imagePath: `${PATHS.media}/retardemote.gif`,
      },
    ]
  },
]