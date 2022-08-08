import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let filterPipe: FilterPipe;

  // synchronous beforeEach
  beforeEach(() => {
    filterPipe = new FilterPipe();
  });

  it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

});