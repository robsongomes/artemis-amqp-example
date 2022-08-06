var container = require("rhea");

const conn = container.connect({
  port: 5672,
  host: "192.168.100.100",
  username: "robson",
  password: "robson",
  container_id: "client01",
});

conn.open_receiver({
  name: "sub02",
  source: {
    address: "mytopic",
    durable: 2,
    expiry_policy: "never",
  },
});

container.on("message", function (context) {
  console.log(context.message.body);
  //context.connection.close();
});
