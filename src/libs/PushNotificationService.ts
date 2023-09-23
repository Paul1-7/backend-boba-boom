import webpush, { PushSubscription } from "web-push";
import { CONFIG } from "~/config";
import { SubscriptionPushService } from "~/services";

const { WEB_PUSH_PRIVATE_KEY, WEB_PUSH_PUBLIC_KEY } = CONFIG;

interface MessageSubscription {
  title: string;
  body: string;
}

webpush.setVapidDetails("mailto:bobaboom@gmail.com", WEB_PUSH_PUBLIC_KEY, WEB_PUSH_PRIVATE_KEY);

class PushNotificationService {
  private subscriptionService: SubscriptionPushService;

  constructor() {
    this.subscriptionService = new SubscriptionPushService();
  }

  async sendToSubscriber(subscription: PushSubscription, payload: MessageSubscription) {
    try {
      await webpush.sendNotification(subscription, JSON.stringify(payload));
    } catch (error) {
      console.error("Error sending push notification:", error);
    }
  }

  async sendToAllSubscribers(payload: MessageSubscription) {
    const subscribers = await this.subscriptionService.getList();

    subscribers.forEach((sub) => {
      const subscription: PushSubscription = JSON.parse(sub.toJSON().token);
      this.sendToSubscriber(subscription, payload);
    });
  }
}

export default PushNotificationService;
