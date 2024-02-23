import dayjs from "dayjs";

import { IFetchOptions } from "@/app/types/FetchOptions";
import { IMAGE_BASE_PATH } from "@/app/utils/constants";

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function buildImagePath(posterPath: string | null): string | null {
  return posterPath ? `${IMAGE_BASE_PATH}${posterPath}` : null;
}

export function convertDateFormat(inputDate: string): string {
  const parsedDate = dayjs(inputDate, { format: "YYYY-DD-MM" });

  return parsedDate.format("DD-MM-YYYY");
}

export async function fetchData<T>(
  url: string,
  options: IFetchOptions = {},
): Promise<T> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("API key not found in environment variables.");
  }

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
    ...options.headers,
  };

  const response = await fetch(url, {
    method: options.method || "GET",
    headers: defaultHeaders,
    body: options.body,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
}
