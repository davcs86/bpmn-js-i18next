'use strict';

var i18next = require('i18next'),
    interpolator = require('diagram-js/lib/i18n/translate/translate');

function I18nextHelper(i18n){
  this._i18n = i18n;
  this._i18next = i18next;
  // empty init
  this._i18next.init();
}

I18nextHelper.$inject = [ 'i18n' ];

I18nextHelper.prototype.translate = function(string, args){
  var translated = this._i18next.t(string, args);
  // apply simple interpolation from the base class
  return interpolator.call(this, translated, args);
};

I18nextHelper.prototype.language = function(){
  return this._i18next.language;
}

I18nextHelper.prototype.changeLanguage = function(lng, callback){
  var that = this;
  this._i18next.changeLanguage(lng, function(err, t){
    if (callback) {
      callback.call(that, err, t);
    }
    that.applyLanguage();
  });
}

I18nextHelper.prototype.applyLanguage = function() {
  this._i18n.changed.call(this);
};

module.exports = I18nextHelper;