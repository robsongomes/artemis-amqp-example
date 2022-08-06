var container = require("rhea");

const conn = container.connect({
  port: 5672,
  host: "192.168.100.100",
  username: "robson",
  password: "robson",
});

conn.open_receiver("myqueue");

container.on("message", function (context) {
  console.log(context.message.body);
  //context.connection.close();
});
