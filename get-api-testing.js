import http from 'k6/http';
import { check } from 'k6';


// We can use these things in command line also

export const options = {
      vus: 10,
      duration: '60s',
  };

export default function () {
    const url = 'https://reqres.in/api/users?page=2';
    const res = http.get(url);
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
