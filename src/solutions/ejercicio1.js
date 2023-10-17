import net from "node:net";

export const ping = (ip, cb) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    cb(null, { time: process.hrtime(startTime), ip });
    return;
  });

  client.on("error", (err) => {
    client.end();
    cb(err, undefined);
  });
};

// ping("midu.dev", (err, info) => {
//   if (err) console.error(err);
//   console.log(info);
// });
