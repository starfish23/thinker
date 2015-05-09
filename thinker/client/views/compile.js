  Meteor.methods({

    getDocumentText: function () {
        var result = getSnapshotSync('htmlDocumentId');
        return result.snapshot;
    }

});

//create sync method.    
getSnapshotSync = Meteor.wrapAsync(ShareJS.model.getSnapshot)