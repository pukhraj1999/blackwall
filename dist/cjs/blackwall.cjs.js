'use strict';

var index = require('./index-DEP0cWTe.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.44.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('blackwall.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["bw-card.cjs",[[513,"bw-card",{"populate":[4],"imgSrc":[1,"img-src"],"imgAlt":[1,"img-alt"],"showBtn":[4,"show-btn"],"name":[1],"description":[1],"descriptionLength":[2,"description-length"],"tagTitle":[1,"tag-title"],"tags":[16],"link":[1],"setPopulate":[32],"setDescription":[32]}]]],["my-component.cjs",[[513,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["bw-btn_5.cjs",[[513,"bw-nav",{"mg":[1],"pd":[1],"homeLink":[16],"navLinks":[16],"links":[32],"isModalOpen":[32]}],[769,"bw-container",{"mg":[1],"pd":[1],"primary":[4],"grid":[4]}],[513,"bw-input",{"boxMg":[1,"box-mg"],"boxMgH":[1,"box-mg-h"],"boxMgV":[1,"box-mg-v"],"boxPd":[1,"box-pd"],"boxPdH":[1,"box-pd-h"],"boxPdV":[1,"box-pd-v"],"mg":[1],"pd":[1],"size":[1],"labelSize":[1,"label-size"],"labelBold":[4,"label-bold"],"label":[1],"type":[1],"placeholder":[1],"textarea":[4],"row":[2],"col":[2],"isError":[32],"value":[32],"isRequired":[32],"isDisabled":[32]},null,{"value":[{"valueChanged":0}]}],[769,"bw-modal",{"isOpen":[4,"is-open"],"name":[1]}],[513,"bw-btn",{"name":[1],"link":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
