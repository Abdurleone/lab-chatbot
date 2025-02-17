import crypto from 'crypto';

const hashApiKey = (apiKey) => {
  const hash = crypto.createHash('sha256');
  hash.update(apiKey);
  return hash.digest('hex');
};

export default hashApiKey;