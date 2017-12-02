export function validateMobile(rule, value, callback) {
  if (value == '') {
    callback();
  } else if (!(/^1[34578]\d{9}$/.test(value))) {
    callback(new Error("手机号码有误，请重填"));
  } else {
    callback();
  }
}
export function validateDiscount(rule, value, callback) {
  if (value == '') {
    callback(new Error('不能为空'));
  } else if (value>1||value<0) {
    callback(new Error("0到1之间"));
  } else {
    callback();
  }
}
