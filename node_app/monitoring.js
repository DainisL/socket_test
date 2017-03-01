"use strict";

const WebSocket = require('ws');
const Repo = require('./monitoring/repo');
const repo = new Repo(WebSocket, "ws://127.0.0.1:3000/monitoring/websocket", {});

const infoChannel = repo.addChannel("monitoring:lobby");
const errorChannel = repo.addChannel("error:kliiko");

infoChannel.on("ping", () => {
  infoChannel.push("pong", { status: 'ok'})
})

infoChannel.join();
