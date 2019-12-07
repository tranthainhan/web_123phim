import * as types from "../Constants/Stepper";

export const toggleStep = step => {
  return {
    type: types.TOGLLE_STEP,
    step
  };
};

export const nextStep = () => {
  return {
    type: types.NEXT_STEP
  };
};
export const prevStep = () => {
  return {
    type: types.PREV_STEP
  };
};
