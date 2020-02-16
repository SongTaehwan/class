const env = process.env;
const target = env.target
const type = env?.type ?? 'index.js';

require(`./${target}/${type}`);
