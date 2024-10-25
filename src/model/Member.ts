export interface DefaultMember {
  name: string;
  isDefault: true;
  price: number;
}

export interface LeaderMember {
  name: string;
  isLeader: true;
  price: number;
}
export interface RestMember {
  name: string;
  order: number;
  price: number;
}

export const isDefaultMember = (member: Member): member is DefaultMember =>
  "isDefault" in member;
export const isLeaderMember = (member: Member): member is LeaderMember =>
  "isLeader" in member;
export const isRestMember = (member: Member): member is RestMember =>
  !("isDefault" in member || "isLeader" in member);

export type Members = [DefaultMember, ...(LeaderMember | RestMember)[]];

export type Member = DefaultMember | LeaderMember | RestMember;