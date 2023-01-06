import { Observable } from 'rxjs';
const throwFetchError = async (res: Response): Promise<any> => {
  throw new Error(await res.text());
};
export const httpGet = <T = unknown>(url: string, init?: RequestInit) => {
  const req: RequestInit = { ...init, method: 'GET' };
  return new Observable<T>((subscriber) => {
    fetch(url, req)
      .then((res) => (res.ok ? res : throwFetchError(res)))
      .then((r) => r.json() as T)
      .then((json) => {
        subscriber.next(json);
        subscriber.complete();
      })
      .catch((err) => subscriber.error(err));
  });
};
