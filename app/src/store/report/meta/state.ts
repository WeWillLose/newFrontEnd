export interface MetaStateInterface {
  lastName: string;
  firstName: string;
  middleName: string;
  quarter: number,
  year1: number,
  year2: number,
  sum1: number,
  sum2: number,
  total: number,
}
const currYear = new Date().getFullYear();

export const defaultMetaState: MetaStateInterface = {
  lastName:'',
  firstName:'',
  middleName:'',
  quarter:1,
  year1: currYear,
  year2: currYear+1,
  sum1:0,
  sum2:0,
  total:0
}

function state(): MetaStateInterface {
  return {
    lastName:'',
    firstName:'',
    middleName:'',
    quarter:1,
    year1: currYear,
    year2: currYear+1,
    sum1:0,
    sum2:0,
    total:0
  }
}

export default state;
