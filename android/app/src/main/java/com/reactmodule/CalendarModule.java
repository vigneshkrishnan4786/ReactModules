package com.reactmodule;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Timer;
import java.util.TimerTask;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }
    private DeviceEventManagerModule.RCTDeviceEventEmitter mEmitter = null;
    private  int count = 0;

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callBack,Callback myFailureCallback) {
        Integer eventId = 0;
        callBack.invoke(null, eventId);
        myFailureCallback.invoke();
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        System.out.println("******"+callBack);
    }
    @ReactMethod
     public void sendEvent(String eventName, String message)
                           {
      WritableMap params = Arguments.createMap();
      params.putString("message",message);
      if(mEmitter == null){
          mEmitter = getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
      }
      if(mEmitter != null){
          mEmitter.emit(eventName,params);
      }
    }
    @ReactMethod
    public void test(){
      new Timer().scheduleAtFixedRate(new TimerTask(){
          @Override
          public void run(){
              count++;
              System.out.println("*****"+count);
            sendEvent("count",String.valueOf(count));
          }
      },0,1000);
    }
}
