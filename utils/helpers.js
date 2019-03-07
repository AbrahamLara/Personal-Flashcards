import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'PersonalFlashCards:notifications'

// Return an object formatted to represent
// a deck and removes whitespaces to make key
export function formatDeck (title) {
  return {
    [title.replace(/\s+/g, '')]: {
      title,
      questions: []
    }
  }
}

// Return an object formatted to represent
// a question in a deck's array of questions
export function formatCard (question, answer) {
  return {
    question,
    answer
  }
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelScheduledNotificationsAsync);
}

function createNotification () {
  return {
    title: "Remember to study",
    body: "Don't forget to study today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotifiation (days = 0) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + days);
              tomorrow.setHours(18);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                  
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}