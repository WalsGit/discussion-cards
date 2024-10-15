import app from 'flarum/app';
import Settings from './components/Settings';


app.initializers.add('walsgit/discussion-cards', () => {
  app.extensionData
    .for('walsgit-discussion-cards')
    .registerPage(Settings)
});

