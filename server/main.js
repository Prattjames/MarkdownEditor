import {Meteor} from 'meteor/meteor';
import {Bins} from '../imports/collections/Bins';

Meteor.startup(() => {

  // Bins Publication Data
  Meteor.publish('bins', function(){
    return Bins.find({ ownerId: this.userId });
  });

  // Bins Sharing
  Meteor.publish('sharedBins', function(){
    const user = Meteor.users.findOne(this.userId);

    if(!user){ return; }

    const email = user.emails[0].address;

    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } }
    })
  });

})
