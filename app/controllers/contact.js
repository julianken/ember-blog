import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendMessage: () => {

      let data = {
        email: $('.contact-email').val(),
        message: $('.contact-textarea').val()
      }

      $.ajax({
        type: 'POST',
        url: 'http://138.197.204.86:3000/messages',
        data: data,
        dataType: "text",
        success: function(resultData) {
          if ((data.email.includes('@') && data.email.includes('.')) && (data.message.length >= 20)) {
            $('.email-wrapper').removeClass('error');
            $('.message-wrapper').removeClass('error');
            $('.description-header').css('background-color', '#72C59A');
            $('.contact-submit').addClass('success-button').html('.');
            $('.emoji-header').children('div').html('Thanks! I\'ll be getting in contact with you soon!').addClass('success-header');
            setTimeout(() => {
              $('.emoji-header').children('div').html('<i class="em em-heart"></i>').removeClass('success-header');
              $('.description-header').css('background-color', '#F5F7FA');
            }, 3500);
          }
          else {
            if ((!data.email.includes('@')) || (!data.email.includes('.'))) {
              $('.email-wrapper').addClass('error');
            } else {
              $('.email-wrapper').removeClass('error');
            }
            if (data.message.length < 20) {
              $('.message-wrapper').addClass('error');
            } else {
              $('.message-wrapper').removeClass('error');
            }
          }
        },
        error: function(error) {
          $('.contact-submit').css('background-color', '#D34E62').html('There was a problem, I\'d still love to hear from you though! Try e-mail');
        }
      })
    }
  }
});
