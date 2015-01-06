window.Todos = Ember.Application.create();
//--Create an application adapter>  Adapters are responsible for communicating with a source of data for your application.
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();