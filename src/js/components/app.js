/** @jsx React.DOM */
var React     = require('react');
var AppLayout = require('./layouts/app-layout');

var Router    = require('react-router-component');
var Locations = Router.Locations;
var Location  = Router.Location;
var NotFound  = Router.NotFound;

var Welcome   = require('./welcome/index');
var Question  = require('./questions/show');
var Result    = require('./results/show');

var APP = React.createClass({
  render: function() {
     return (
       <AppLayout >
         <Locations
          onNavigation={this.handleNavigation}>
            <Location path="/" handler={Welcome} />
            <Location path="/survey" handler={Question} />
            <Location path="/results" handler={Result} />
           <NotFound handler={Welcome} />
         </Locations>
       </AppLayout>
     )

  }
});

module.exports = APP;
