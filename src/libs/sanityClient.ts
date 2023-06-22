import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "153j9fyp",
  dataset: "production",
  apiVersion: "2023-06-22",
  token:
    "skOZ1BFQZh4cuYhN1pd3yA9YUsKhiCqTPbvldH1lOVYXst7rJ8lSFgaJsAGdJZfGqulihn1BUZ22zn8UPrtwLc72xl0enXp194ukb70TtPgmj9HhtBNSl7rKtaqwZDzmbunOHAEoRvodbyYZsbsQBtFjcKq0xbFYwtByGOL5DXd1iZrvKxVo",
  useCdn: false,
});
