export const patch = async <DataToPatchModel, ResponseModel>(args: {
  url: string;
  data: DataToPatchModel;
}): Promise<ResponseModel> => {
  const { data, url } = args;
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);

  if (response.ok === false) {
    throw Error(`${response.status}`);
  }

  const responseJSON = await response.json();
  const responseModel = responseJSON as ResponseModel;

  return responseModel;
};
