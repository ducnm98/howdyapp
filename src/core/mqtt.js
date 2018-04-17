import mqtt from 'mqtt';

var client = mqtt.connect(process.env.MQTT_URL || 'wss://broker.goingsunny.com');

export default client;
