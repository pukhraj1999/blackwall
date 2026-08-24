import { b as bootstrapLazy } from './index-C2eNYrd9.js';
export { s as setNonce } from './index-C2eNYrd9.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["bw-card",[[513,"bw-card",{"imgSrc":[1,"img-src"],"imgAlt":[1,"img-alt"],"name":[1],"description":[1],"descriptionLength":[2,"description-length"],"tagTitle":[1,"tag-title"],"tags":[16],"Link":[1,"link"]}]]],["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
};

export { defineCustomElements };
