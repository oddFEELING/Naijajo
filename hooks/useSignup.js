import axios from 'axios';

async function useSignup(event) {
  const firstname = event.target[0].value;
  const lastname = event.target[1].value;
  const email = event.target[2].value;
  const password = event.target[3].value;

  const newUser = {
    firstname,
    lastname,
    email,
    password,
  };

  let fetchData;
  //-->  validate fields
  if (firstname.length < 3 || lastname.length < 3) {
    event.target[0].focus();
    alert('First or last name too short');
  } else if (password.length < 6) {
    event.target[3].focus();
    alert('password should be more than 6 characters');
  } else {
    // send user credentials
    try {
      fetchData = await axios
        .post('http://localhost:4000/_api/user/signup', {
          ...newUser,
        })
        .then((res) => {
          const data = res.data;

          if (data.status === 'ok') {
            localStorage.setItem('userToken', data.token);
            return { status: 'ok' };
          } else {
            return { status: data.status };
          }
        });
    } catch (err) {
      console.log(`error --> ${err}`);
    }
  }
  return fetchData;
}

export default useSignup;
