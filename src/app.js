var UI = require('ui');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window();

// Create TimeText
var timeText = new UI.TimeText({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color:'white',
  textAlign: 'center'
});

// Add the TimeText
window.add(timeText);

// Show the Window
window.show();