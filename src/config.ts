import { Members } from "./model/Member";

interface Config {
  accountNumber: string;
  specificSymbol?: 2024;
  currency: string;
  paymentsCategories: Members;
  gifts: number[];
}

export const config: Config = {
  accountNumber: "CZ3220100000002801050859",
  specificSymbol: 2024,
  currency: "CZK",
  paymentsCategories: [
    {
      name: "Další z rodiny",
      isDefault: true,
      price: 1300,
    },
    {
      name: "První z rodiny",
      order: 1,
      price: 2000,
    },
    {
      name: "Druhý z rodiny",
      order: 2,
      price: 1600,
    },
    {
      name: "Činovník",
      isLeader: true,
      price: 1000,
    },
    {
      name: "Sponzor",
      isSponsor: true,
      price: 5000,
    },
  ],
  gifts: [500, 1000, 1500, 2000],
};
