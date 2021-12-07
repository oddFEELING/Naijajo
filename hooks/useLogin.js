import axios from 'axios';

async function useLogin(event) {
  const email = event.target[0].value;
  const password = event.target[1].value;

  const loginData = {
    email,
    password,
  };
  let Stats;
  // send user credentials
  try {
    Stats = await axios
      .post('http://localhost:4000/_api/user/login', {
        ...loginData,
      })
      .then((res) => {
        const data = res.data;

        //   save token upon successful login
        if (data.status === 'ok') {
          localStorage.setItem('userToken', data.token);
          return { status: 'ok' };
        } else {
          return { status: data.status };
        }
      });
  } catch (err) {
    console.log(`Error --> ${err}`);
  }
  return Stats;
}

export default useLogin;
