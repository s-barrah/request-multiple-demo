import axios from "axios";

// interfaces
import IItems from "../interfaces/items";
import IResponse from "../interfaces/response";

const CHUNK_SIZE = 5;

interface IResults {
  items: IItems[];
}

function getDataFromUrl(url: string) {
  return axios
    .get(url)
    .then((response) => response.data.data)
    .catch((error) => console.error(error));
}

function getAllData(urls: string[]): Promise<IResults[]> {
  return new Promise((resolve, reject) => {
    return Promise.all(urls.map((url) => getDataFromUrl(url)))
      .then((results) => resolve(results))
      .catch((err) => reject(err));
  });
}

function getItems(results: IResults[][]) {
  const response: IItems[] = [];
  results.map((result) => {
    return result.map((data) => {
      return data.items.map((item) => {
        response.push(item);
        return true;
      });
    });
  });
  return response;
}

function createUrlChunks(urls: string[]) {
  const urlChunks = [];
  let batchIterator = 0;
  while (batchIterator < urls.length) {
    urlChunks.push(urls.slice(batchIterator, (batchIterator += CHUNK_SIZE)));
  }
  return urlChunks;
}

function validateUrl(url: string) {
  try {
    const validUrl = new URL(url);
    return !!validUrl;
  } catch (error) {
    return false;
  }
}

/**
 * Function to fetch data from
 * an array of urls
 * @param urls
 * @return Promise<unknown>
 */
export default function requestMultipleUrls(
  urls: string[]
): Promise<IResponse> {
  if (!urls.length || urls.find((url) => !validateUrl(url)))
    throw new Error("Please enter a valid input");

  return new Promise((resolve, reject) => {
    const urlChunks = urls.length > CHUNK_SIZE ? createUrlChunks(urls) : [urls];
    Promise.all(urlChunks.map((allUrls) => getAllData(allUrls)))
      .then((results) => {
        const response: IItems[] = getItems(results);
        resolve({
          status: "success",
          message: response,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}
