
const fetchData = async <T>(url: string): Promise<T> => {
    return await fetch(
    url,
    {
      headers: {
        Authorization:
          "Bearer 46e6d245339729e91297b39beac386d011b44293f6d8e82122ec06dac586726646955d58d329ec93954e7a838da3a12d84952aa6344c83c69bc88b14305b246d684291773e0f89ff1bd2f8342e8a9283699b4f25c8bdf092ad1b9fa6a26a4b1b34cd394b445af92a5de845631884931b6a81546d1459d533fab1702b6873e74c",
      },
      cache: "force-cache",
    }
  ).then((res) => res.json());}

  export default fetchData;