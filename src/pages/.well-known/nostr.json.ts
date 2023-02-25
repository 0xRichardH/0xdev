import type { APIRoute } from "astro";

const NIP05 = {
  names: {
    richard: "1f2c0926f45636dda7f1a9e9e28e8554e94b1943b47c0831153e464b5f002671",
  },
};

export const get: APIRoute = (_params: any) => {
  return {
    status: 200,
    body: JSON.stringify(NIP05),
  };
}
