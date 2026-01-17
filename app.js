// 这是一个“汇率表”（先写死在代码里，和 Lab 的思路一样）
// 意思：1 HKD 可以换多少目标货币
const rates = {
  USD: 0.13,
  JPY: 18.6,
  EUR: 0.12
};

// 这个函数负责：读取输入 -> 计算 -> 把结果写回网页
function convertCurrency() {
  // 1) 从网页读取用户输入的 HKD
  const hkdInput = document.getElementById("hkd");
  const hkd = parseFloat(hkdInput.value);

  // 2) 读取用户选择的币种（USD/JPY/EUR）
  const currencySelect = document.getElementById("currency");
  const cur = currencySelect.value;

  // 3) 找到“结果显示”的位置
  const resultEl = document.getElementById("result");

  // 4) 做基本检查（防止空值/乱输入）
  if (isNaN(hkd)) {
    resultEl.innerHTML = "请先输入预算（HKD）";
    return;
  }

  if (cur === "no") {
    resultEl.innerHTML = "请选择币种";
    return;
  }

  // 5) 拿到汇率并计算
  const rate = rates[cur];
  const converted = hkd * rate;

  // 6) 把结果写回网页（更新页面内容）
  resultEl.innerHTML = `${hkd.toFixed(2)} HKD ≈ ${converted.toFixed(2)} ${cur}`;
}

// 页面加载完成时（onload 思想）：给页面一个初始提示
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("result").innerHTML = "（等待你输入预算并选择币种）";
});
