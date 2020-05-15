import request, {Response} from 'request';

request("https://github.com/", {
  headers: {
    // https://github.com/request/request/issues/2047#issuecomment-272473278
    Connection: "keep-alive"
  }
}, (error: any, response: Response, body: any) => {
  console.log(body);
})
