import {getCookieHelper} from "@/helper/cookieHelper";

export default async function ({ router }) {
   let token = getCookieHelper("access_token");
  if (token) {
    router.go(-1);
    return false;
  }
  return true;
}
