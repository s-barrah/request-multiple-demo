import IQuote from "./quotes";
import IBasic from "./basic";

export default interface IItems {
  symbolInput: string;
  basic: IBasic;
  quote: IQuote;
}
