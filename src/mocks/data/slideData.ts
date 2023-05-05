import active_power from "./active_power.png";
import BOD from "./bod_submission.png";
import MEL from "./maximum_export_limit.png";
import portfolio_control from "./portfolio_control.png";
import storybook from "./storybook.png";

export const slideData = [
  {
    img: storybook,
    disc: "Component library for creating reusabl components. The styling of the library is implemented using Material UI",
    heading: "Storybook",
  },
  {
    img: BOD,
    disc: "A balancing mechanism for trading the electricity. The trading period is 30 minutes long where user can offer the value for electricity.",
    heading: "Bid Offer Data",
  },
  {
    img: MEL,
    disc: "The maximum level at which the trading value is exported in (MW)",
    heading: "Maximum Export Limit",
  },
  {
    img: portfolio_control,
    disc: "An intergrated UI where trader/user can see information about various assets and how much value user/trader can supply. ",
    heading: "Portfolio Control",
  },
  {
    img: active_power,
    disc: "The power which we can supply to the traders for balancing mechanism",
    heading: "Active Power",
  },
];
