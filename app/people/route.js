import Ember from 'ember';

var PeopleRoute = Ember.Route.extend({
    model(){
        return {
            'foo': 'bob',
            'bar': 'steve'
        };
    }
});

export default PeopleRoute;