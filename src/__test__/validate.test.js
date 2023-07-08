import {
    isObject,
    isFunction,
    isNotEmptyObject,
    isString,
    isHasValue,
    isNotEmpty,
    isEmail,
    isNumeric,
    isDate,
    isFile,
  } from '../validate';
  
  describe('isObject', () => {
    it('should return true if input is an object', () => {
      const result = isObject({});
      expect(result).toBe(true);
    });
  
    it('should return false if input is not an object', () => {
      const result = isObject('string');
      expect(result).toBe(false);
    });
  });
  
  describe('isFunction', () => {
    it('should return true if input is a function', () => {
      const result = isFunction(() => {});
      expect(result).toBe(true);
    });
  
    it('should return false if input is not a function', () => {
      const result = isFunction({});
      expect(result).toBe(false);
    });
  });
  
  describe('isNotEmptyObject', () => {
    it('should return true if input is a non-empty object', () => {
      const result = isNotEmptyObject({ prop: 'value' });
      expect(result).toBe(true);
    });
  
    it('should return false if input is an empty object', () => {
      const result = isNotEmptyObject({});
      expect(result).toBe(false);
    });
  
    it('should return false if input is not an object', () => {
      const result = isNotEmptyObject('string');
      expect(result).toBe(false);
    });

    describe('isString', () => {
        it('should return true if input is a string', () => {
          const result = isString('Hello');
          expect(result).toBe(true);
        });
      
        it('should return false if input is not a string', () => {
          const result = isString(123);
          expect(result).toBe(false);
        });
      });
      
      describe('isHasValue', () => {
        it('should return true if input has a value', () => {
          const result = isHasValue('Hello');
          expect(result).toBe(true);
        });
      
        it('should return false if input does not have a value', () => {
          const result = isHasValue(null);
          expect(result).toBe(false);
        });
      });
      
      describe('isNotEmpty', () => {
        it('should return true if input is not empty', () => {
          const result = isNotEmpty('Hello');
          expect(result).toBe(true);
        });
      
        it('should return false if input is empty', () => {
          const result = isNotEmpty('');
          expect(result).toBe(false);
        });
      });
      
      describe('isEmail', () => {
        it('should return true if input is a valid email', () => {
          const result = isEmail('test@example.com');
          expect(result).toBe(true);
        });
      
        it('should return false if input is not a valid email', () => {
          const result = isEmail('invalidemail');
          expect(result).toBe(false);
        });
      });
      
      describe('isNumeric', () => {
        it('should return true if input is a numeric value', () => {
          const result = isNumeric(123);
          expect(result).toBe(true);
        });
      
        it('should return false if input is not a numeric value', () => {
          const result = isNumeric('abc');
          expect(result).toBe(false);
        });
      });
      
      describe('isDate', () => {
        it('should return true if input is a Date object', () => {
          const result = isDate(new Date());
          expect(result).toBe(true);
        });
      
        it('should return false if input is not a Date object', () => {
          const result = isDate('2021-01-01');
          expect(result).toBe(false);
        });
      });
  });
  

  