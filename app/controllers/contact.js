import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendMessage: () => {

      let data = {email: $('.contact-email').val(), message: $('.contact-textarea').val()}

      $.ajax({
        type: 'POST',
        url: 'http://138.197.204.86:3000/messages',
        data: data,
        dataType: "text",
        success: function(resultData) {
          $('.description-header').css('background-color', '#72DCA3');
          $('.contact-submit').addClass('success-button').html('.');
          $('.emoji-header').children('div').html('Thanks! I\'ll be getting in contact with you soon!').addClass('success-header');
        },
        error: function(error) {
          $('.contact-submit').css('background-color', '#D34E62').html('There was a problem, I\'d still love to hear from you though! Try e-mail');
        }
      })
    }
  }
});
