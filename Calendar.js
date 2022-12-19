import { NativeModules,NativeEventEmitter } from 'react-native';

const { CalendarModule } = NativeModules;
console.log(CalendarModule );
// CalendarModule.createCalendarEvent('vignesh', 'chennai');
// componentDidMount() {

//   const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
//   this.eventListener = eventEmitter.addListener('EventReminder', (event) => {
//      console.log(event.eventProperty) // "someValue"
//   });

// }
// componentWillUnmount() {
//   this.eventListener.remove(); //Removes the listener
// }
export const openExampleActivity =  () => {
    // CalendarModule.createCalendarEvent(
    //     'Ram',
    //     'Tirunelveli',
    //     (error, eventId) => {
    //       if (error) {
    //         console.error(`Error found! ${error}`);
    //       }
    //       console.log(`event id ${eventId} returned`);
    //     }
    //   );
    CalendarModule.test();
  };