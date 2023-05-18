import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function createConfigs(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function getHabits(token) {
  const promise = axios.get(`${BASE_URL}/habits`, createConfigs(token));

  return promise;
}

function createHabit(token) {
//   const promise = axios.post(`${BASE_URL}/habits`, createConfigs(token));
//   return promise;
}

function deleteHabits(token) {
//   const promise = axios.delete(
//     `${BASE_URL}/habits/${id}`,
//     createConfigs(token)
//   );
//   return promise;
}

const apiHabits = { getHabits, createHabit, deleteHabits };
export default apiHabits;
