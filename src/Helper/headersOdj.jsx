export function headersObjData() {
  return {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
}
