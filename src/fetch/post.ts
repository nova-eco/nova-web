export const post = async <DataToPostModel, ResponseModel>(args: {
  url: string;
  data: DataToPostModel;
}): Promise<ResponseModel> => {
  const { data, url } = args;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);

  if (response.ok === false) {
    throw Error(`${response.status}`);
  }

  return (await response.json()) as ResponseModel;
};
