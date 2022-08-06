var container = require("rhea");

const conn = container.connect({
  port: 5672,
  host: "192.168.100.100",
  username: "robson",
  password: "robson",
});

conn.open_sender("mytopic");

container.once("sendable", function (context) {
  const msg = process.argv[2];
  context.sender.send({ body: msg });
  context.connection.close();
});
