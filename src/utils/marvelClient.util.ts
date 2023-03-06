import MARVEL_CONFIG from "../marvelConfig.json";

import md5 from "md5";


const generateURL = (
  endpoint: string,
  limit: number | null,
  offset: number | null
): string => {
  const timestamp = new Date().getTime();

  const hash = md5(
    timestamp + MARVEL_CONFIG.PRIVATE_KEY + MARVEL_CONFIG.PUBLIC_KEY
  );

  return `${MARVEL_CONFIG.MARVEL_URL}/${endpoint}?ts=${timestamp}&apikey=${MARVEL_CONFIG.PUBLIC_KEY}&hash=${hash}&offset=${offset}&limit=${limit}`;
};

export default generateURL;
