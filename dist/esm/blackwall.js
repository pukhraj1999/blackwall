import { p as promiseResolve, b as bootstrapLazy } from './index-BOf3roUy.js';
export { s as setNonce } from './index-BOf3roUy.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.44.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["bw-card_3",[[513,"bw-card",{"imgSrc":[1,"img-src"],"imgAlt":[1,"img-alt"],"name":[1],"description":[1],"descriptionLength":[2,"description-length"],"tagTitle":[1,"tag-title"],"tags":[16],"Link":[1,"link"]}],[769,"bw-container",{"mg":[1],"pd":[1],"grid":[4]}],[513,"bw-nav",{"mg":[1],"pd":[1],"homeLink":[16],"navLinks":[16],"links":[32]}]]],["my-component",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
