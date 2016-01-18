'use strict';

// 定义的actionType 常量
export const TEXT_UPDATE = 'TEXT_UPDATE';
export const SWITCH_UPDATE = 'SWITCH_UPDATE';

/*
 * action 创建函数
 */
export function textUpdate(text) {
  return {
    type: TEXT_UPDATE,
    text: text,
   }
}

export function switchUpdate(flag) {
  return {
    type: SWITCH_UPDATE,
    flag: flag,
  }
}
