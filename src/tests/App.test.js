import { reducer, initialState, updateTimes, initializeTimes } from '../App';

describe('initializeTimes function', () => {
    test('initializes the timess for a specific date', () => {
      const dispatch = jest.fn();
  
      // Call the function with the mock dispatch
      const initTimes = initializeTimes(dispatch);
      initTimes('2024-05-14');
  
      // Assert the dispatch call
      expect(dispatch).toHaveBeenCalledWith({
        type: 'initialize',
        payload: { date: '2024-05-14', times: ["17:00",
           "17:30",
           "18:00",
           "18:30",
           "19:00",
           "19:30",
           "20:00",
           "20:30",
           "21:00",
           "21:30",
           "23:30",] },
      });
    });
  });
  
  
  describe('updateTimes function', () => {
    test('reserves a time slot', () => {
      const dispatch = jest.fn();
  
      // Calling the function with the mock dispatch
      const reserveTime = updateTimes(dispatch);
      reserveTime('12:00', '2024-05-14');
  
      // Assert the dispatch call
      expect(dispatch).toHaveBeenCalledWith({
        type: 'reserve',
        payload: { reservedTime: '12:00', date: '2024-05-14' },
      });
    });
  });