import webpush from "web-push";
import { CONFIG } from "~/config";

const { WEB_PUSH_PRIVATE_KEY, WEB_PUSH_PUBLIC_KEY } = CONFIG;

export const webPush = webpush.setVapidDetails("mailto:bobaboom@gmail.com", WEB_PUSH_PUBLIC_KEY, WEB_PUSH_PRIVATE_KEY);
