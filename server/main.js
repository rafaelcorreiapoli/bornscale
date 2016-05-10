import { Meteor } from 'meteor/meteor';

Subscribers = new Mongo.Collection('subscribers');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	sendEmail(emailObj) {
		console.log('[sendEmail]', emailObj);
    this.unblock();
    
		Email.send({
			from: 'BornScale Contact',
			to: 'contact@bornscale.com',
			subject: 'New customer contact',
				text: `
	<ul>
		<li> Name: ${emailObj.name} </li>
		<li> Email: ${emailObj.email} </li>
		<li> Budget: ${emailObj.budget} </li>
		<li> Overview: ${emailObj.overview} </li>
	</ul>
`
		})
	},
  subscribe(email) {
    return Subscribers.insert({
      email: email,
      date: new Date()
    })
  }
})