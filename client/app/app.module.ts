import * as angular from 'angular';

  // NPM Angular dependencies
import 'angular-ui-router';

// High Level Pages
import emojiList from './emojiList/emojiList.module';
 // Config stuff
import {Config} from './app.config';
const dependencies = [
  'ui.router',
  emojiList
];
angular.module('app', dependencies)
  .config(Config);

angular.bootstrap(document.body, ['app'], {strictDi: true});
