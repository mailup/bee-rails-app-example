( function($, Bee, undefined ) {


  Bee.init = function() {
    $.ajax({ url: '/bee/token', success: Bee.create});
  };

  Bee.create = function(token) {
    BeePlugin.create(token, Bee.config(), Bee.on_create);
  };

  Bee.on_save = function(jsonFile, htmlFile) {

  };

  Bee.on_save_as_template = function(jsonFile) {

  };

  Bee.on_auto_save = function(jsonFile) {

  };

  Bee.on_send = function(htmlFile) {

  };

  Bee.on_error = function(errorMessages) {
    console.log('onError ', errorMessages);
  };

  Bee.on_create = function(bee) {
    $.ajax({ url: $('#bee-plugin-container').data('template'), success: Bee.on_load_template});
    window.bee = bee;
  };

  Bee.on_load_template = function(template) {
    window.bee.start(JSON.parse(template));
  },

  Bee.config = function() {
   return  {
    uid: 'RailsExampleApp',
    container: 'bee-plugin-container',
    autosave: false,
    language: 'en-US',
    preventClose: false,
    specialLinks: [{
     type: 'unsubscribe',
     label: 'SpecialLink.Unsubscribe',
     link: 'http://[unsubscribe]/'
   }],
   onSave: Bee.on_save,
   onSaveAsTemplate: Bee.on_save_as_template,
   onAutoSave: Bee.on_auto_save,
   onSend: Bee.on_send,
   onError: Bee.on_error
 }
};





}(jQuery, window.Bee = window.Bee || {}));
