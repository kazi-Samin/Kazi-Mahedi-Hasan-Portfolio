import friendsData from "@/lib/friends.json";

export const friends = friendsData;

export function getFriendById(id) {
  return friends.find((friend) => friend.id === Number(id));
}

export function getSummaryCards(friendList) {
  const overdue = friendList.filter((friend) => friend.status === "overdue").length;
  const almostDue = friendList.filter((friend) => friend.status === "almost due").length;
  const onTrack = friendList.filter((friend) => friend.status === "on-track").length;

  return [
    { label: "Total Friends", value: friendList.length, note: "People you are intentionally keeping close." },
    { label: "Overdue", value: overdue, note: "Need a check-in before the relationship drifts." },
    { label: "Almost Due", value: almostDue, note: "Good time for a quick message this week." },
    { label: "On Track", value: onTrack, note: "Healthy touch-points already in motion." },
  ];
}
