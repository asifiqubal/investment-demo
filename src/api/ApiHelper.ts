import axios from 'axios';
type ReturnValue =
  | {
      data: unknown;
      error?: undefined;
    }
  | {
      data?: undefined;
      error: unknown;
    };

type PostFnType = <ArgType>(url: string, arg: ArgType) => Promise<ReturnValue>;

export const Post: PostFnType = (url, arg) => {
  return new Promise(resolve => {
    axios
      .post(url, arg)
      .then(res => {
        // const dt = res.data as ResultType;
        resolve({data: res.data, error: undefined});
      })
      .catch(error => {
        console.log('error', error);

        // const {data, status} = error.response;
        resolve({
          data: undefined,
          error: {
            message: 'error',
            status: 400,
          },
        });
      });
  });
};
