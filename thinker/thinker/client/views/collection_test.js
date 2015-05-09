FS.debug = true;

var eventPhotosStore = new FS.Store.FileSystem('eventPhotos', {
  path: '~/uploads/full'
});

eventPhotos = new FS.Collection('eventPhotos', {
  stores: [eventPhotosStore]
});
eventPhotos.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});

events = new Meteor.Collection('events');

if (Meteor.isClient) {
  Template.hello.events({
    'click input[type="submit"]': function () {
      var file = $('#file').get(0).files[0];
      var fileObj = eventPhotos.insert(file);
      console.log('Upload result: ', fileObj);
      events.insert({
        name: 'events',
        file: fileObj
      });
    }
  });
}
