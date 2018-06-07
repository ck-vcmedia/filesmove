import axios from 'axios';

export const CREATE_LEAD = 'CREATE_LEAD';
export const CREATE_TEST_LEAD = 'CREATE_TEST_LEAD';

export function createLead(values, cb, meta) {

  const request = axios.post('https://ani-api-v1-0-0.herokuapp.com/api/leads', values)
    .then(() => {
      cb();
    });

  return {
    type: CREATE_LEAD,
    payload: request
  }
}

export function createTestLead(values, cb, meta) {
  cb()
    
  return {
    type: CREATE_TEST_LEAD,
    payload: values
  }
}