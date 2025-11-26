export const get = async <ResponseModel>(args: {
  url: string;
}): Promise<ResponseModel> => {
  const { url } = args;
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(url, options);

  if (response.ok === false) {
    throw Error(`${response.status}`);
  }

  return (await response.json()) as ResponseModel;
};
