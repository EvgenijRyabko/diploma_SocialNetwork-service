const crypto = require('crypto');

const IV_SIZE = 16;

module.exports.AES = {
  encode(plainText, keyString) {
    try {
      const iv = crypto.randomBytes(IV_SIZE);
      const cipher = crypto.createCipheriv('aes-256-cbc', keyString, iv);
      let encrypted = cipher.update(plainText);

      encrypted = Buffer.concat([encrypted, cipher.final()]);

      return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
    } catch (e) {
      return new Error(e).message;
    }
  },

  decode(combinedString, keyString) {
    try {
      const textParts = combinedString.split(':');
      const iv = Buffer.from(textParts[0], 'hex');
      const encryptedText = Buffer.from(textParts[1], 'hex');
      const decipher = crypto.createDecipheriv('aes-256-cbc', keyString, iv);

      let decrypted = decipher.update(encryptedText);
      decrypted = Buffer.concat([decrypted, decipher.final()]);

      return decrypted.toString();
    } catch (e) {
      return new Error(e).message;
    }
  },
};
