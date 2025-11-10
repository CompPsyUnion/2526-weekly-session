# D - Investigation

> **Problem Summary:** Simulate Baicen's actions and determine his conclusion.

> **问题摘要：** 模拟百岑的行为并确定他的结论。

## Background

Baicen was woken up by an anonymous call late in the night calling him to go to Xiaoshiguang.
He is now exploring Xiaoshiguang in complete darkness, trying to figure out what has happened. 

百岑在深夜被一个匿名电话叫醒，电话让他去小时光。
他现在正在完全黑暗中探索小时光，试图弄清楚发生了什么。

You need to **simulate his behavior** and determine the conclusion he eventually reaches based on his action sequence.

你需要**模拟他的行为**，并根据他的动作序列确定他最终得出的结论。

## Problem Description

Given a string $S$, each character represents one of Baicen's actions.  
Different actions trigger different psychological states, and when certain conditions are met, Baicen draws a conclusion.

给定一个字符串 $S$，每个字符代表百岑的一个动作。  
不同的动作会触发不同的心理状态，当满足某些条件时，百岑会得出一个结论。

### Action Characters

<div align=center>

| Character | Action Description |
| :---: | :---: |
| `s` | Search the room |
| `l` | Turn on the light |
| `d` | Check the desk |
| `c` | Call Robert |
| `x` | Call Zhou |
| `t` | Check the time |
| `q` | Say to himself "Have I traveled through time?" |
| `w` | Recall the previous scene |
| `h` | Shout "Where are you!" |
| `z` | Stare blankly (end action) |

| 字符 | 动作描述 |
| :---: | :---: |
| `s` | 搜索房间 |
| `l` | 打开灯 |
| `d` | 检查桌子 |
| `c` | 给罗伯特打电话 |
| `x` | 给周打电话 |
| `t` | 查看时间 |
| `q` | 自言自语“我穿越了吗？” |
| `w` | 回忆之前的场景 |
| `h` | 喊“你在哪儿！” |
| `z` | 茫然地盯着（结束动作） |

</div>

### Rules and Priority

<div align=center>

| Priority | Trigger Condition | Output Conclusion |
| :---: | :---: | :---: |
| $1$ | Before `z`, no `l`, `s`, `d` appeared | Baicen stands dazed, doing nothing |
| $2$ | Consecutive `cc` or `xx` | The other party hung up, Baicen sinks into thought |
| $3$ | Consecutive `t -> c` or `t -> x` followed by `q` | Baicen suspects he has traveled through time |
| $4$ | Consecutive `l -> d -> w` | Baicen realizes the desk has been cleared |
| $5$ | Consecutive `s -> h`, and no `c` or `x` appeared before | Baicen shouts in the dark, no one responds |
| $6$ | No `l` appears anywhere, current char is `s` or `d` | In total darkness, Baicen sees nothing |
| $7$ | Consecutive `t -> c` | Robert is awakened, anger $+1$ |
| $8$ | Consecutive `t -> x` | Zhou is awakened, but he doesn't dare to be angry |
| $9$ | Consecutive `t -> w -> q`, and no `c` or `x` appeared before `t` | Baicen feels he is in the Trisolaris world |
| $10$ | Before current position, at least one of $l$, $s$, $t$ appeared, and none of $d`, $q`, $w`, $h` appeared | Baicen feels everything is normal, keeps idling |
| $11$ | None of the above | Baicen sinks into endless contemplation |

| 优先级 | 触发条件 | 输出结论 |
| :---: | :---: | :---: |
| $1$ | 在 `z` 之前，没有出现 `l`、`s`、`d` | 百岑茫然地站着，什么也没做 |
| $2$ | 连续出现 `cc` 或 `xx` | 对方挂断了电话，百岑陷入沉思 |
| $3$ | 连续出现 `t -> c` 或 `t -> x`，随后是 `q` | 百岑怀疑自己穿越了 |
| $4$ | 连续出现 `l -> d -> w` | 百岑意识到桌子被清空了 |
| $5$ | 连续出现 `s -> h`，且之前没有出现 `c` 或 `x` | 百岑在黑暗中喊叫，没有人回应 |
| $6$ | 没有出现 `l`，当前字符是 `s` 或 `d` | 在完全黑暗中，百岑什么也看不见 |
| $7$ | 连续出现 `t -> c` | 罗伯特被叫醒，愤怒值 $+1$ |
| $8$ | 连续出现 `t -> x` | 周被叫醒，但他不敢生气 |
| $9$ | 连续出现 `t -> w -> q`，且在 `t` 之前没有出现 `c` 或 `x` | 百岑觉得自己在三体世界 |
| $10$ | 在当前位置之前，至少出现过 $l$、$s$、$t$ 中的一个，且没有出现 $d`、$q`、$w`、$h` | 百岑觉得一切正常，继续闲逛 |
| $11$ | 以上都不符合 | 百岑陷入无尽的沉思 |

</div>

## Input Format

The first line contains an integer $T$ ($1 \le T \le 10^{4}$).  

第一行包含一个整数 $T$ ($1 \le T \le 10^{4}$)。  

The next $T$ lines each contain a string $S$ ($1 \le |S| \le 10^{5}$).  

接下来的 $T$ 行每行包含一个字符串 $S$ ($1 \le |S| \le 10^{5}$)。  

$S$ only contains $\{l,s,d,c,x,t,q,w,h,z\}$.

$S$ 仅包含 $\{l,s,d,c,x,t,q,w,h,z\}$。

## Output Format

For each input, output a single line with the corresponding conclusion (in English).  

对于每个输入，输出一行对应的结论（英文）。  

Do not output extra blank lines or spaces. All punctuation is English, no periods.

不要输出额外的空行或空格。所有标点符号均为英文，无句号。

## Sample Input

```
3
tcq
ldw
ssshh
```

```
3
tcq
ldw
ssshh
```

## Sample Output

```
Baicen suspects he has traveled through time
Baicen realizes the desk has been cleared
Baicen shouts in the dark, no one responds
```

```
百岑怀疑自己穿越了
百岑意识到桌子被清空了
百岑在黑暗中喊叫，没有人回应
```

## Sample Explanation

1. `tcq` triggers Rule $3$ (`t -> c -> q`)  
2. `ldw` triggers Rule $4$ (`l -> d -> w`)  
3. `ssshh` triggers Rule $5$ (`s -> h`)  

1. `tcq` 触发规则 $3$ (`t -> c -> q`)  
2. `ldw` 触发规则 $4$ (`l -> d -> w`)  
3. `ssshh` 触发规则 $5$ (`s -> h`)  

## Constraints

<div align=center>

| Test Case | $T$ | $\lvert S \rvert$ | Special Constraints |
| :---: | :---: | :---: | :---: |
| Sample | $T = 3$ | As given | |
| $1$–$4$ | $T = 1$ | $\lvert S \rvert < 100$ | No conflict triggered |
| $5$–$8$ | $T = 1$ | $\lvert S \rvert < 100$ | |
| $9$–$13$ | $T < 50$ | $\lvert S \rvert < 10^{4}$ | No conflict triggered |
| $14$–$18$ | $T < 50$ | $\lvert S \rvert < 10^{4}$ | |
| $19$ | $T = 50$ | $\lvert S \rvert = 10^{4}$ | |
| $20$ | $T = 1$ | $\lvert S \rvert < 10^{4}$ | |

| 测试用例 | $T$ | $\lvert S \rvert$ | 特殊约束 |
| :---: | :---: | :---: | :---: |
| 示例 | $T = 3$ | 如给定 | |
| $1$–$4$ | $T = 1$ | $\lvert S \rvert < 100$ | 无冲突触发 |
| $5$–$8$ | $T = 1$ | $\lvert S \rvert < 100$ | |
| $9$–$13$ | $T < 50$ | $\lvert S \rvert < 10^{4}$ | 无冲突触发 |
| $14$–$18$ | $T < 50$ | $\lvert S \rvert < 10^{4}$ | |
| $19$ | $T = 50$ | $\lvert S \rvert = 10^{4}$ | |
| $20$ | $T = 1$ | $\lvert S \rvert < 10^{4}$ | |

</div>

<div class="break-page"/>

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

string s;

// Define all outputs in an array corresponding to rule indices
const string outputs[] = {
    "Baicen stands dazed, doing nothing",                 // 0: rule z
    "The other party hung up, Baicen sinks into thought", // 1: cc/xx
    "Baicen suspects he has traveled through time",       // 2: tcq
    "Baicen realizes the desk has been cleared",          // 3: ldw
    "Baicen shouts in the dark, no one responds",         // 4: sh
    "In total darkness, Baicen sees nothing",             // 5: sd
    "Robert is awakened, anger +1",                       // 6: tc
    "Zhou is awakened, but he doesn't dare to be angry",  // 7: tx
    "Baicen feels he is in the Trisolaris world",         // 8: twq
    "Baicen feels everything is normal, keeps idling",    // 9: lst
    "Baicen sinks into endless contemplation"             // 10: default
};

// check if the rule is triggered at position pos
bool check(int rule_id, int pos)
{
    int len = s.length();

    switch (rule_id)
    {
    case 0:
    { // z
        if (s[pos] == 'z')
        {
            bool flg = true;
            for (int i = 0; i < pos; i++)
            {
                if (s[i] == 'l' || s[i] == 's' || s[i] == 'd')
                {
                    flg = false;
                    break;
                }
            }
            if (flg)
            {
                cout << outputs[0] << "\n";
                return true;
            }
        }
        break;
    }
    case 1:
    { // cc/xx
        if (pos + 1 < len && ((s[pos] == 'c' && s[pos + 1] == 'c') || (s[pos] == 'x' && s[pos + 1] == 'x')))
        {
            cout << outputs[1] << "\n";
            return true;
        }
        break;
    }
    case 2:
    { // tcq
        if (pos + 2 < len && s[pos] == 't' && (s[pos + 1] == 'c' || s[pos + 1] == 'x') && s[pos + 2] == 'q')
        {
            cout << outputs[2] << "\n";
            return true;
        }
        break;
    }
    case 3:
    { // ldw
        if (pos + 2 < len && s[pos] == 'l' && s[pos + 1] == 'd' && s[pos + 2] == 'w')
        {
            cout << outputs[3] << "\n";
            return true;
        }
        break;
    }
    case 4:
    { // sh
        bool noCall = true;
        for (int i = 0; i < pos; i++)
            if (s[i] == 'c' || s[i] == 'x')
                noCall = false;
        if (noCall && pos + 1 < len && s[pos] == 's' && s[pos + 1] == 'h')
        {
            cout << outputs[4] << "\n";
            return true;
        }
        break;
    }
    case 5:
    { // sd
        bool noLight = true;
        for (char ch : s)
            if (ch == 'l')
                noLight = false;
        if (noLight && (s[pos] == 's' || s[pos] == 'd'))
        {
            cout << outputs[5] << "\n";
            return true;
        }
        break;
    }
    case 6:
    { // tc
        if (pos + 1 < len && s[pos] == 't' && s[pos + 1] == 'c')
        {
            cout << outputs[6] << "\n";
            return true;
        }
        break;
    }
    case 7:
    { // tx
        if (pos + 1 < len && s[pos] == 't' && s[pos + 1] == 'x')
        {
            cout << outputs[7] << "\n";
            return true;
        }
        break;
    }
    case 8:
    { // twq
        bool noCall = true;
        for (int i = 0; i < pos; i++)
            if (s[i] == 'c' || s[i] == 'x')
                noCall = false;
        if (noCall && pos + 2 < len && s[pos] == 't' && s[pos + 1] == 'w' && s[pos + 2] == 'q')
        {
            cout << outputs[8] << "\n";
            return true;
        }
        break;
    }
    case 9:
    { // lst
        bool flg = true, flg2 = false;
        for (int i = 0; i <= pos; i++)
        {
            if (s[i] == 'l' || s[i] == 's' || s[i] == 't')
                flg2 = true;
            if (s[i] == 'd' || s[i] == 'q' || s[i] == 'w' || s[i] == 'h')
                flg = false;
        }
        flg = flg && flg2;
        if (flg)
        {
            cout << outputs[9] << "\n";
            return true;
        }
        break;
    }
    }
    return false;
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    while (T--)
    {
        cin >> s;
        bool matched = false;

        // Rule 0: z
        for (int i = 0; i < (int)s.length(); i++)
        {
            if (check(0, i))
            {
                matched = true;
                break;
            }
        }
        if (matched)
            continue;

        // Rules 1~9
        for (int i = 0; i < (int)s.length() && !matched; i++)
        {
            for (int rule = 1; rule <= 9; rule++)
            {
                if (check(rule, i))
                {
                    matched = true;
                    break;
                }
            }
        }

        if (!matched)
        {
            cout << outputs[10] << "\n"; // default
        }
    }
    return 0;
}

```
