angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.checkin'
      2) Using $state.go programatically:
        $state.go('tabsController.checkin');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/checkin
      /page1/tab2/checkin
      /page1/tab3/checkin
  */
  .state('tabsController.checkin', {
    url: '/checkin',
    views: {
      'tab1': {
        templateUrl: 'templates/checkin.html',
        controller: 'checkinCtrl'
      },
      'tab2': {
        templateUrl: 'templates/checkin.html',
        controller: 'checkinCtrl'
      },
      'tab3': {
        templateUrl: 'templates/checkin.html',
        controller: 'checkinCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.event'
      2) Using $state.go programatically:
        $state.go('tabsController.event');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
      /page1/tab3/page3
  */
  .state('tabsController.event', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      },
      'tab2': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      },
      'tab3': {
        templateUrl: 'templates/event.html',
        controller: 'eventCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.records'
      2) Using $state.go programatically:
        $state.go('tabsController.records');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('tabsController.records', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/records.html',
        controller: 'recordsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/records.html',
        controller: 'recordsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/records.html',
        controller: 'recordsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/tab1/checkin')

  

});