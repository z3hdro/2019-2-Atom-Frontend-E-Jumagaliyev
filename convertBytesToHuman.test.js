/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-7)).toBe(false);
  expect(convertBytesToHuman('lol')).toBe(false);
  expect(convertBytesToHuman(332.228)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1 B')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(123123213123)).toBe('114.67 GB');
});

test('Возвращает перегрузку из-за большого количества данных', () =>{
  expect(convertBytesToHuman(123123123123123123123).toBe("Too large number or data.Sorry("));
});

// другая группа проверок