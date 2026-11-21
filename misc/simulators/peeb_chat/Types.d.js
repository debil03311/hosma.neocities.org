/**
 * @typedef {{
 *  username: String,
 *  pfpPath: String,
 *  replies: Reply[],
 * }} User
 */

/**
 * @typedef {{
 *  emojiPath?: String,
 *  text?: String,
 *  imagePath?: String,
 * }} Reply
 */

/**
 * @typedef {'IMAGE' | 'EMOJI' | 'TEXT'} ReplyType
 */