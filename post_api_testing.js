import http from 'k6/http';
import { check, sleep } from 'k6';

// We can use these things in command line also
export const options = {
    vus: 50,
    duration: '60s',
};

const url = 'https://reqres.in/api/register';
const payload = JSON.stringify({
      username : "string",
      email : "string",
      password : "string"
    });

const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export default function () {
    const response = http.post(url, payload, params);

    // Check the response
    check(response, {
        'is status 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });

    sleep(1);
}
