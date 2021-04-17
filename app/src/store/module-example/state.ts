export interface ExampleStateInterface {
  isOpen: boolean;
}

function state(): ExampleStateInterface {
  return {
    isOpen: false
  }
}

export default state;
