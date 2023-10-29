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
type GetFnType = (url: string) => Promise<ReturnValue>;

export const Post: PostFnType = (url, arg) => {
  return new Promise(resolve => {
    axios
      .post(url, arg)
      .then(res => {
        resolve({data: res.data, error: undefined});
      })
      .catch(error => {
        // console.log('error', error.response);
        resolve({
          data: undefined,
          error: {
            message: error.message,
            status: error.status,
          },
        });
      });
  });
};

export const Get: GetFnType = (url: string) => {
  return new Promise(resolve => {
    axios
      .get(url)
      .then(res => {
        resolve({data: res.data, error: undefined});
      })
      .catch(error => {
        console.log('error', error);
        resolve({
          data: undefined,
          error: {
            message: error.message,
            status: error.status,
          },
        });
      });
  });
};
