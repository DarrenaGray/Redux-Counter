export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ODD = 'INCREMENT_ODD';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = (count) => {
  // Fill in this function
  return {
    type: INCREMENT,
    payload: count
  }
};

export const decrement = (count) => {
  // Fill in this function
  return {
    type: DECREMENT,
    payload: count
  }
};

export const incrementOdd = count => {
  return {
    type: INCREMENT_ODD,
    payload: count
  }
}