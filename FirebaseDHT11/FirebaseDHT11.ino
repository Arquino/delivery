#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#include  <ESP8266WiFi.h>
#include <FirebaseArduino.h>


#define FIREBASE_HOST "delivery-b1f6d.firebaseio.com"
#define WIFI_SSID "INTRUSION" // Change the name of your WIFI
#define WIFI_PASSWORD "arctroid" // Change the password of your WIFI
#define DHTPIN 15    // Data Pin of DHT 11 , for NodeMCU D5 GPIO no. is 2
#define DHTTYPE DHT11   // DHT 11


DHT dht(DHTPIN, DHTTYPE);

void setup() {

 
   WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
   while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
   dht.begin();
  Serial.println ("");
  Serial.println ("WiFi Connected!");
  Firebase.begin(FIREBASE_HOST);
  
}

void loop() {
 
  float h = dht.readHumidity();
  
  float t = dht.readTemperature();  // Reading temperature as Celsius (the default)
  Firebase.setFloat ("Temp",t);
  Firebase.setFloat ("Humidity",h);
  delay(200);
}
