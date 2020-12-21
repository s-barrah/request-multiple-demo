export default interface IQuote {
  lastPrice: number;
  openPrice: number;
  high: number;
  low: number;
  closePrice: number;
  previousClosePrice: number;
  change1Day: number;
  change1DayPercent: number;
  change1Week: number;
  change1WeekPercent: number;
  ask: number;
  bid: number;
  timeStamp: string;
  volume: number;
}
