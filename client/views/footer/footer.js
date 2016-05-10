Template.footer.onCreated(function() {
  this.formState = new ReactiveVar('');

  this.autorun(() => {
    if (this.formState.get() != '') {
      setTimeout(() => {
        $('.alert').addClass('animated fadeOut');
        setTimeout(() => {
          this.formState.set('');
        }, 500)
      }, 3000);
    }
  })
});

Template.footer.helpers({
  successSending() {
    return Template.instance().formState.get() === 'success'
  },
  errorSending() {
    return Template.instance().formState.get() === 'error'
  },
  loading() {
    return Template.instance().formState.get() === 'loading'
  }   
});

Template.footer.events({
  'submit #subscribe-form': function (event, template) {
    event.preventDefault();
    let email = template.$('input[name="email"]').val();

    var requiredInputs = template.$('#subscribe-form').find('input[data-required="true"]').toArray();

    requiredInputs.forEach(function(element, index) {
      if (!$(element).val()) {
        $(element).parent('.input-group').addClass('has-error');
      } else {
        $(element).parent('.input-group').removeClass('has-error');
      }
    });

    if (email) {
      Meteor.call('subscribe', email, (err, res) => {
        if (err) {
          template.formState.set('error');
        } else {
          template.formState.set('success');
          template.$('#subscribe-form :input').prop('disabled', true);
        }
      })
    }
  },
  'keyup input[name="email"]'(event, template) {
    let target = $(event.target);
    target.parent('.input-group').removeClass('has-error');
  }
});