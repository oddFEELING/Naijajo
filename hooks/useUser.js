import axios from 'axios';

export default async function useUser() {
  // get existing token
  const token = localStorage.getItem('userToken');

  let fetchedUser;
  //  check for token existence
  if (token) {
    try {
      //-->  token exists
      fetchedUser = await axios
        .post('http://localhost:4000/_api/user/get-user', {
          token: token,
        })
        .then((res) => {
          console.log(res.data);
          return res.data.User;
        });
    } catch (err) {
      console.log(`Error --> ${err}`);
      return { error: err };
    }
  } else {
    //-->  token does not exist
    fetchedUser = await axios
      .post('http://localhost:4000/_api/user/get-user', {
        token: null,
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  }

  return fetchedUser;
}
