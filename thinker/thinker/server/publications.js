Meteor.publish('documents', function() {
  var users;
  users = [this.userId];
  return Documents.find({
    $or: [
      {
        userId: users[0]
      }, {
        invitedUsers: {
          $in: users
        }
      }
    ]
  });
});
Meteor.publish('users', function() {
  return Meteor.users.find({});
});