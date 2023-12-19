import app from 'flarum/app';
import SettingsPage from './components/SettingsPage';


app.initializers.add('walsgit-discussion-cards', () => {
  app.extensionData
    .for('walsgit-discussion-cards')
    .registerPage(SettingsPage)
});