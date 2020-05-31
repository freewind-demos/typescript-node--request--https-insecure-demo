import request, {Response} from 'request';

const url = 'https://og-dev-12345.local/marketplace/';

// Works but have a warning
// (process as any).env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

request(url, {
  agentOptions: {
    // works
    rejectUnauthorized: false
  }
}, (error: any, response: Response, body: any) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(body.length);
})
