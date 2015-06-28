// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',  'pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

  // $translate.use(lang);
  // $translateProvider.preferredLanguage('hi');
  $translateProvider
    // cs: language locales from lang/*.json by static loader
   .useStaticFilesLoader({
    prefix: 'lang/locale-',
    suffix: '.json'
    })

    // cs:default language i language for missing translations
        .preferredLanguage('hi') // cs:preferred language
    // cs:language used for missing translation, may be a list of languages: ids separated with comma
  .fallbackLanguage('en') 

    // cs:register my available languages
  .registerAvailableLanguageKeys(['pl', 'en', 'de', 'it', 'es', 'fr', 'pt'], {
  'pl' : 'pl', 'pl_PL': 'pl',
  'en' : 'en', 'en_GB': 'en', 'en_US': 'en', 'en_AU': 'en', 'en_CA': 'en', 'en_IN': 'en', 'en_IE': 'en', 'en_MT': 'en', 'en_NZ': 'en', 'en_PH': 'en', 'en_SG': 'en', 'en_ZA': 'en', 'en_UK': 'en',
  'de' : 'de', 'de_DE': 'de', 'de_CH': 'de', 'de_AT': 'de', 'de_LU': 'de',
  'it' : 'it', 'it_IT': 'it', 'it_CH': 'it',
  'es' : 'es', 'es_ES': 'es', 'es_AR': 'es', 'es_BO': 'es', 'es_CL': 'es', 'es_CO': 'es', 'es_CR': 'es', 'es_DO': 'es', 'es_EC': 'es', 'es_SV': 'es', 'es_GT': 'es', 'es_HN': 'es', 'es_MX': 'es', 'es_NI': 'es', 'es_PA': 'es', 'es_PY': 'es', 'es_PE': 'es', 'es_PR': 'es', 'es_ES': 'es', 'es_US': 'es', 'es_UY': 'es', 'es_VE': 'es',
  'fr' : 'fr', 'fr_BE': 'fr', 'fr_CA': 'fr', 'fr_FR': 'fr', 'fr_LU': 'fr', 'fr_CH': 'fr',
  'pt' : 'pt', 'pt_BR': 'pt', 'pt_PT': 'pt'
        })
    
    // cs: user language detection
  .determinePreferredLanguage()
    
    // cs:remember language in custom storage 
  .useLocalStorage();


    // $translateProvider.translations('hi', {
    //         hello_message: "Howdy",
    //         goodbye_message: "Goodbye"
    //     });
    //     $translateProvider.translations('es', {
    //         hello_message: "Hola",
    //         goodbye_message: "Adios"
    //     });
    //     $translateProvider.preferredLanguage("hi");
    //     $translateProvider.fallbackLanguage("en");

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'HomeTabCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});



