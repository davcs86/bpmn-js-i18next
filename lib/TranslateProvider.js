'use strict';

var inherits = require('inherits'),
  BaseTranslateProvider = require('bpmn-js/lib/features/translate/TranslateProvider'),
  i18next = require('i18next');

function TranslateProvider(eventBus){
  BaseTranslateProvider.call(this, eventBus);
  this._i18next = i18next;
  this.setOptions.call(null, this._i18next);
}

inherits(TranslateProvider, BaseTranslateProvider);

TranslateProvider.$inject = ['eventBus'];

TranslateProvider.prototype.t = function(string, args){
  var translated = this._i18next.t(string, args);
  // apply simple interpolation from the base class
  return BaseTranslateProvider.prototype.t.call(this, translated, args);
};

TranslateProvider.prototype.language = function(){
  return this._i18next.language();
}

TranslateProvider.prototype.changeLanguage = function(lng, callback){
  var that = this;
  this._i18next.changeLanguage(lng, function(err, t){
    if (callback) {
      callback.call(that, err, t);
    }
    that.applyLanguage();
  });
}

TranslateProvider.prototype.applyLanguage = function() {
  BaseTranslateProvider.prototype.applyLanguage.call(this);
};



module.exports = TranslateProvider;