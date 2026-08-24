'use strict';

var index = require('./index-HhUyBnhQ.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["bw-btn_5.cjs",[[513,"bw-nav",{"mg":[1],"pd":[1],"homeLink":[16],"navLinks":[16],"links":[32],"isModalOpen":[32]}],[513,"bw-card",{"imgSrc":[1,"img-src"],"imgAlt":[1,"img-alt"],"name":[1],"description":[1],"descriptionLength":[2,"description-length"],"tagTitle":[1,"tag-title"],"tags":[16],"link":[1]}],[769,"bw-container",{"mg":[1],"pd":[1],"grid":[4]}],[769,"bw-modal",{"isOpen":[4,"is-open"],"name":[1]}],[513,"bw-btn",{"name":[1],"link":[1]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
