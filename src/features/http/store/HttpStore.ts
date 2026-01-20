export class HttpStore {
  public async get(url: string): Promise<unknown> {
    // TODO check API_URL exist
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL as string}${url}`);
    return response.json();
  }
}
