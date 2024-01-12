import "server-only";

import { draftMode } from "next/headers";
import { client } from "./sanity.client";

const token = process.env.SANITY_API_READ_TOKEN;

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

async function sanityFetch({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}) {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }

  return client.fetch(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: "previewDrafts",
    }),
    next: {
      revalidate: isDraftMode ? 0 : false,
      tags,
    },
  });
}

module.exports = { sanityFetch, token };
