import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	sendEmail(emailObj) {
		console.log('[sendEmail]', emailObj);

// 		Email.send({
// 			from: 'BornScale Contact',
// 			to: 'contact@bornscale.com',
// 			subject: 'New customer contact',
// 				text: `
// 	<ul>
// 		<li> Name: ${emailObj.name} </li>
// 		<li> Email: ${emailObj.email} </li>
// 		<li> Budget: ${emailObj.budget} </li>
// 		<li> Overview: ${emailObj.overview} </li>
// 	</ul>
// `
// 		})
	}
})