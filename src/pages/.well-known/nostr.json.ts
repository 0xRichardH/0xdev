import type { APIRoute } from "astro";

const NIP05 = {
  names: {
    richard: "1f2c0926f45636dda7f1a9e9e28e8554e94b1943b47c0831153e464b5f002671",
    heydao: "ef763c8f622d8bbd99063e23be538ae47d43231227800295c1d30642666674f7",
  },
};

export const get: APIRoute = (_params: any) => {
  return {
    status: 200,
    body: JSON.stringify(NIP05),
  };
};
