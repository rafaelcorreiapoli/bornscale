FlowRouter.route('/', {
  action() {
    BlazeLayout.render('layout', {main: 'home'});
  }
})

FlowRouter.route('/portfolio/ehs', {
  action() {
    BlazeLayout.render('layout', {main: 'ehs'});
  }
})

FlowRouter.route('/portfolio/siga-livre', {
  action() {
    BlazeLayout.render('layout', {main: 'sigaLivre'});
  }
})

FlowRouter.route('/portfolio/shact', {
  action() {
    BlazeLayout.render('layout', {main: 'shact'});
  }
})

FlowRouter.route('/portfolio/praxi-level', {
  action() {
    BlazeLayout.render('layout', {main: 'praxiLevel'});
  }
})
FlowRouter.route('/portfolio/techdb', {
  action() {
    BlazeLayout.render('layout', {main: 'praxiLevel'});
  }
})
FlowRouter.route('/portfolio/liontax-calendar', {
  action() {
    BlazeLayout.render('layout', {main: 'praxiLevel'});
  }
})