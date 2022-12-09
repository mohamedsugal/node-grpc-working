const grpc = require("@grpc/grpc-js")
import { HoroscopeServiceClient } from "../proto/services/horoscope/v1/horoscope_grpc_pb";
import { HoroscopeRequest } from "../proto/services/horoscope/v1/horoscope_pb";

// const channel = new grpc.Channel("localhost:6565", grpc.credentials.createInsecure());
const client = new HoroscopeServiceClient (
    "localhost:50051",
    grpc.credentials.createInsecure()
);

const request = new HoroscopeRequest();
request.setName("mohamed");
request.setHoroscopeSign("libra");

client.getHoroscopeInfo(request, (err, response) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(response);
})
