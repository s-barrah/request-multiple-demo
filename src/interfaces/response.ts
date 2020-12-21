import IItems from "./items";

export default interface IResponse {
  status: string;
  message: IItems | any;
}
