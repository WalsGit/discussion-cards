import app from 'flarum/app';
//import SettingsPage from './components/SettingsPage';
import Test from './components/Test';

app.initializers.add('walsgit-discussion-cards', () => {
  app.extensionData
    .for('walsgit-discussion-cards')
    .registerPage(Test)
});