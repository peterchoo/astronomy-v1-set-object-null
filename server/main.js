import { Meteor } from 'meteor/meteor';

MyModel = Astro.Class({
  name: 'MyModel',
  collection: new Mongo.Collection('models'),
  fields: {
    name: 'string',
    obj: {
      type: 'object',
      default: null,
      optional: true,
    },
  },
});

Meteor.startup(() => {

  /**
   * Generate a model
   */
  let model = new MyModel({
    name: 'testObj',
    obj: {
      test: 'object'
    },
  });
  console.log('original model', model.raw());
  const _id = model.save();

  /**
   * Try to set the object to null
   */
  let savedModel = MyModel.findOne({_id});
  savedModel.set('obj', null);
  savedModel.save();
  console.log('saved model', savedModel.raw());
});
