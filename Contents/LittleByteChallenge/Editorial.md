<style>
@media print {
.break-page {
page-break-before: always;
}
}
</style>

<style>
table{
    align=center;
}
</style>

***

# Little Byte Challenge

## Welcome to `Little Byte Challenge` held by Computer Psycho Union. 

> Dictionaries are not allowed with one exception. Those whose first language is not English may use a standard translation dictionary to translate between that language and English provided that neither language is the subject of this examination. Subject specific translation dictionaries are not permitted. 
>
> Paper materials are $\color{red}{\mathrm{PERMITTED}}$ in this competition. 
>
> No electronic devices capable of storing and retrieving text, including electronic dictionaries, may be used. 
>
> You can **ONLY** use Chrome, Visual Studio Code, Terminal on university's computer, and use our Online Judge system in Chrome.

<div align=center>

| Problem | Title | Proposer |
| :---: | :---: | :---: |
| A | [Bluesee's XOR](#a---bluesees-xor) | Lijie ZHOU |
| B | [SPDPO](#b---) | Pinjia LI |
| C | [Database](#c---database) | Baicen LIU |
| D | [Investigation](#d---investigation) | Lijie ZHOU |
| E | [Robot](#e---robot) | Zhirui CAI |
| F | [Challenge](#f---challenge) | Lijie ZHOU |
| G | [Alternating Subsequence](#g---alternating-subsequence) | Zhirui SHEN |
| H | [Adventure](#h---adventure) | Lijie ZHOU |
| I | [Canteen](#i---canteen) | Jiabao GUO |
| J | [Loyalty](#j---loyalty) | Yiming Zhang |
| K | [3D Diagram Art](#k---3d-diagram-art) | Siyuan HE |
| L | [Moodle](#l---moodle) | Yuxin YANG |
| M | [Polygon](#m---polygon)| Baicen LIU |

</div>

*: POI stands for Polish Olympiad in Informatics.

**: CEOI stands for Central European Olympiad in Informatics

Problems reviewed by *Lijie ZHOU*, *Hongxi LYU*, *Siyuan HE* and *Baicen LIU*.

© 2025 Computer Psycho Union, University of Nottingham, Ningbo China. All rights reserved — Licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)



***

## Standard Code

```cpp

```

# A - Bluesee's XOR

> **Problem Summary:** Given two integers $A$ and $B$, compute their bitwise XOR result.

> **问题摘要：** 给定两个整数 $A$ 和 $B$，计算它们的按位异或结果。

## Background

Bluesee the bear, the beloved mascot of FoSE (Faculty of Science and Engineering), UNNC, is organizing a special activity for the Computer Psycho Union (CPU). As part of the welcome event, Bluesee has prepared a series of coding challenges for students.

FoSE（宁诺科学与工程学院）的吉祥物 Bluesee 熊正在为计算机心理协会（CPU）组织一项特别活动。作为迎新活动的一部分，Bluesee 为学生们准备了一系列编程挑战。

The first challenge is a warm-up problem to test everyone's understanding of basic bitwise operations. Bluesee believes that mastering XOR operations is essential for competitive programming!

第一个挑战是一个热身问题，用于测试大家对基本按位操作的理解。Bluesee 认为掌握异或操作对竞赛编程至关重要！

## Problem Description

You are given two integers $A$ and $B$. Your task is to compute $A \oplus B$, where $\oplus$ denotes the bitwise `XOR` operation.

给定两个整数 $A$ 和 $B$。你的任务是计算 $A \oplus B$，其中 $\oplus$ 表示按位 `XOR` 操作。

The bitwise `XOR` operation compares each bit of its operands. For each bit position, if the bits are different, the result has a $1$ in that position; otherwise, it has a $0$.

按位 `XOR` 操作比较操作数的每一位。如果某一位的两个操作数不同，则结果在该位为 $1$；否则为 $0$。

Help Bluesee verify the answers to make sure everyone gets started on the right foot!

帮助 Bluesee 验证答案，确保每个人都能顺利开始！

## Input Format

The first line contains an integer $T$ ($1 \le T \le 10^{5}$), the number of test cases.

第一行包含一个整数 $T$ ($1 \le T \le 10^{5}$)，表示测试用例的数量。

Each of the next $T$ lines contains two integers $A$ and $B$ ($0 \le A, B \le 10^{18}$).

接下来的 $T$ 行中，每行包含两个整数 $A$ 和 $B$ ($0 \le A, B \le 10^{18}$)。

## Output Format

For each test case, output a single line containing the value of $A \oplus B$.

对于每个测试用例，输出一行，包含 $A \oplus B$ 的值。

## Sample Input

```
3
5 3
10 10
123456789 987654321
```

```
3
5 3
10 10
123456789 987654321
```

## Sample Output

```
6
0
1032168868
```

```
6
0
1032168868
```

## Sample Explanation

**Test Case 1:** $5 \oplus 3$

**测试用例 1：** $5 \oplus 3$

- $5$ in binary: $101_2$
- $5$ 的二进制表示：$101_2$
- $3$ in binary: $011_2$
- $3$ 的二进制表示：$011_2$
- XOR result: $110_2 = 6$
- 异或结果：$110_2 = 6$

**Test Case 2:** $10 \oplus 10$

**测试用例 2：** $10 \oplus 10$

- $10$ in binary: $1010_2$
- $10$ 的二进制表示：$1010_2$
- $10$ in binary: $1010_2$
- $10$ 的二进制表示：$1010_2$
- XOR result: $0000_2 = 0$
- 异或结果：$0000_2 = 0$

## Constraints

<div align=center>

| Testpoint | $T$ | $A, B$ |
| :---: | :---: | :---: |
| Sample | $3$ | As shown |
| $1$–$5$ | $T \le 10$ | $A,B \le 10^{3}$ |
| $6$–$10$ | $T \le 100$ | $A,B \le 10^{9}$ |
| $11$–$20$ | $T \le 10^{5}$ | $A,B \le 10^{18}$ |

| 测试点 | $T$ | $A, B$ |
| :---: | :---: | :---: |
| 示例 | $3$ | 如上所示 |
| $1$–$5$ | $T \le 10$ | $A,B \le 10^{3}$ |
| $6$–$10$ | $T \le 100$ | $A,B \le 10^{9}$ |
| $11$–$20$ | $T \le 10^{5}$ | $A,B \le 10^{18}$ |

</div>

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int T;
    cin >> T;
    
    while (T--) {
        long long A, B;
        cin >> A >> B;
        cout << (A ^ B) << "\n";
    }
    
    return 0;
}

```

# B - SPDPO

> **Problem Summary:** Select non-overlapping activities to maximize total credits.

> **问题摘要：** 选择不重叠的活动以最大化总学分。

## Problem Description

Freshmen need to earn $50$ SPDPO credits in their first academic year, most of which can be obtained by participating in activities organized by various organizations (such as CPU). For the busy student Bruce, he has $t$ hours of free time in a week. During this week, there are $n$ activities with start time $a_i$, end time $b_i$, and credit $c_i$. For activities with conflicting time, Bruce can only participate in one of them. Find the maximum number of credits Bruce can earn in this week.

新生需要在第一学年获得 $50$ SPDPO 学分，其中大部分可以通过参加各种组织（如 CPU）举办的活动获得。对于忙碌的学生 Bruce，他每周有 $t$ 小时的空闲时间。在这一周内，有 $n$ 个活动，每个活动有开始时间 $a_i$，结束时间 $b_i$ 和学分 $c_i$。对于时间冲突的活动，Bruce 只能参加其中一个。请计算 Bruce 在这一周内可以获得的最大学分。

## Input Format

The first line contains two integers $n$ and $t$ ($1 \le n < 100$, $0 < t < 24$), representing the total number of activities and Bruce's free time (in hours).

第一行包含两个整数 $n$ 和 $t$ ($1 \le n < 100$, $0 < t < 24$)，分别表示活动总数和 Bruce 的每周空闲时间（以小时计）。

The next $n$ lines each contain three integers $a_i$, $b_i$, $c_i$ ($0 < a_i < b_i < 24$, $0 < c_i < 10$), representing the start time, end time, and credits of the $i$-th activity.

接下来的 $n$ 行每行包含三个整数 $a_i$, $b_i$, $c_i$ ($0 < a_i < b_i < 24$, $0 < c_i < 10$)，分别表示第 $i$ 个活动的开始时间、结束时间和学分。

## Output Format

Output a single integer representing the maximum number of credits Bruce can earn in a week without time conflicts.

输出一个整数，表示 Bruce 在一周内可以获得的最大学分（无时间冲突）。

## Sample Input

```
4 10
1 3 5
2 5 6
4 7 3
6 9 8
```

## Sample Output

```
14
```

## Sample Explanation

Among the $4$ given activities, choose two activities with non-conflicting time intervals:
1. Activity $2$: start time $2$, end time $5$, earning $6$ credits
2. Activity $4$: start time $6$, end time $9$, earning $8$ credits

在给定的 $4$ 个活动中，选择两个时间不冲突的活动：
1. 活动 $2$：开始时间 $2$，结束时间 $5$，获得 $6$ 学分
2. 活动 $4$：开始时间 $6$，结束时间 $9$，获得 $8$ 学分

Total credits: $6 + 8 = 14$. Both activities are within Bruce's $10$-hour free time and provide the maximum total credits achievable.

总学分：$6 + 8 = 14$。这两个活动都在 Bruce 的 $10$ 小时空闲时间内，并提供了可获得的最大总学分。

## Constraints

- $0 < t < 24$
- $0 < n < 100$
- $0 < a_i < b_i < 24$
- $0 < c_i < 10$

- $0 < t < 24$
- $0 < n < 100$
- $0 < a_i < b_i < 24$
- $0 < c_i < 10$

<div align=center>

| Test Case | $n$ | $t$ |
| :---: | :---: | :---: |
| Sample | $n = 4$ | $t = 10$ |
| $1$–$3$ | $n \le 5$ | $10 < t < 20$ |
| $4$–$6$ | $10 \le n \le 20$ | $15 \le t \le 22$ |
| $7$–$10$ | $30 \le n \le 50$ | $18 \le t \le 22$ |
| $11$–$15$ | $60 \le n \le 80$ | $20 \le t \le 22$ |
| $16$–$20$ | $80 \le n < 100$ | $22 \le t < 24$ |

</div>

<div class="break-page"/>

## Standard Code

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

// Define activity structure with start time, end time, and credits
struct Activity
{
    int start, end, credit;
};

// Comparison function: sort by end time in ascending order
bool compareEnd(const Activity &a, const Activity &b)
{
    return a.end < b.end;
}

int main()
{
    int n, t;
    cin >> n >> t;

    // Use static array to store activities (assuming n <= 1000)
    Activity acts[1005];

    // Read all activity information
    for (int i = 0; i < n; i++)
    {
        cin >> acts[i].start >> acts[i].end >> acts[i].credit;
    }

    // Sort activities by end time (key step for DP interval scheduling)
    sort(acts, acts + n, compareEnd);

    // dp[i] = maximum credits considering first i activities (after sorting by end time)
    int dp[1005] = {0};

    // Process each activity with dynamic programming
    for (int i = 0; i < n; i++)
    {
        // Case 1: Don't select current activity i
        // If i>0, max credits without selecting i is dp[i-1]
        if (i > 0)
        {
            dp[i] = dp[i - 1];
        }

        // Case 2: Select current activity i (only if end time <= t)
        if (acts[i].end <= t)
        {
            // Binary search to find last activity that doesn't conflict with i
            // Find maximum j such that acts[j].end <= acts[i].start
            int low = 0, high = i - 1;
            int prev = -1; // Index of last non-conflicting activity, -1 if none

            while (low <= high)
            {
                int mid = (low + high) / 2;
                if (acts[mid].end <= acts[i].start)
                {
                    // If mid doesn't conflict, record position and search right
                    prev = mid;
                    low = mid + 1;
                }
                else
                {
                    // If mid conflicts, search left
                    high = mid - 1;
                }
            }

            // Calculate total credits if selecting activity i
            int credit_with_i = acts[i].credit;
            // If there's a non-conflicting predecessor, add its optimal solution
            if (prev != -1)
            {
                credit_with_i += dp[prev];
            }

            // Take maximum of two cases: not select i vs select i
            dp[i] = max(dp[i], credit_with_i);
        }
        // If activity end time exceeds t, can only choose not to select it
        // This case is already handled by dp[i] = dp[i-1] above
    }

    // Output result: maximum credits considering all activities
    cout << dp[n - 1] << endl;

    return 0;
}
```

# C - Database

> **Problem Summary:** Extract the longest consecutive sequence of digits from a string.

> **问题摘要：** 从字符串中提取最长的连续数字序列。

## Background

Baicen LIU, the president of UNNC's Computer Psycho Union (CPU), assigned Robert the task of analyzing freshmen enrollment data for the new academic year. The database contains important information like student IDs, admission scores, and contact numbers.

刘百岑，宁波诺丁汉大学计算机心理协会（CPU）的主席，给罗伯特布置了一项任务，分析新学年的新生入学数据。数据库包含学生学号、入学成绩和联系方式等重要信息。

However, disaster struck! When Robert attempted to export the data, a critical system error occurred. Instead of neat columns and rows, the entire database got jumbled into a single corrupted string. Student IDs merged with phone numbers, admission scores mixed with dormitory room numbers, and everything became an incomprehensible mess of digits, letters, and special characters.

然而，灾难发生了！当罗伯特尝试导出数据时，系统发生了严重错误。整个数据库变成了一串混乱的字符串，学生学号与电话号码混在一起，入学成绩与宿舍房号混在一起，一切都变成了难以理解的数字、字母和特殊字符的混合体。

"This is terrible!" Robert exclaimed, staring at the garbled output on his screen.

“这太糟糕了！”罗伯特惊呼，盯着屏幕上的乱码。

Your task is to help Robert extract the longest consecutive sequence of digits from the corrupted data string.

你的任务是帮助罗伯特从损坏的数据字符串中提取最长的连续数字序列。

## Problem Description

Given a string $S$ consisting of lowercase letters, uppercase letters, digits, and special characters, find the **longest consecutive sequence of digits** and output it as an integer.

给定一个由小写字母、大写字母、数字和特殊字符组成的字符串 $S$，找到**最长的连续数字序列**并将其作为整数输出。

If there are multiple sequences of the same maximum length, output the **largest** one numerically.

如果有多个长度相同的序列，输出数值上最大的一个。

If there are no digits in the string, output $-1$.

如果字符串中没有数字，输出 $-1$。

## Input Format

The first line contains an integer $T$ ($1 \le T \le 100$), the number of test cases.

第一行包含一个整数 $T$ ($1 \le T \le 100$)，表示测试用例的数量。

Each of the next $T$ lines contains a string $S$ ($1 \le |S| \le 10^{5}$), representing the corrupted data.

接下来的 $T$ 行每行包含一个字符串 $S$ ($1 \le |S| \le 10^{5}$)，表示损坏的数据。

$S$ consists of:
- Lowercase letters ($a$-$z$)
- Uppercase letters ($A$-$Z$)
- Digits ($0$-$9$)
- Special characters (space, `.`, `-`, `@`, `#`, etc.)

$S$ 由以下字符组成：
- 小写字母 ($a$-$z$)
- 大写字母 ($A$-$Z$)
- 数字 ($0$-$9$)
- 特殊字符（空格, `.`, `-`, `@`, `#` 等）

## Output Format

For each test case, output a single integer representing the longest consecutive sequence of digits.

对于每个测试用例，输出一个整数，表示最长的连续数字序列。

If there are multiple sequences with the same maximum length, output the numerically largest one.

如果有多个长度相同的序列，输出数值上最大的一个。

If no digits exist in the string, output $-1$.

如果字符串中没有数字，输出 $-1$。

## Sample Input

```
5
abc123xyz456def
StudentID:20241001,Score:98,Phone:13812345678
Hello@World!
Room305-Phone:1234567-Grade:95
a1b2c3d4e5f6g7h8i9j0
```

## Sample Output

```
456
13812345678
-1
1234567
9
```

## Sample Explanation

**Test Case 1:** `abc123xyz456def`
- Digit sequences: `123`, `456`
- Maximum length: $3$
- Both have length $3$, so output the larger: $456$

**测试用例 1：** `abc123xyz456def`
- 数字序列：`123`, `456`
- 最大长度：$3$
- 两者长度相同，因此输出较大的：$456$

**Test Case 2:** `StudentID:20241001,Score:98,Phone:13812345678`
- Digit sequences: $20241001$ (8 digits), $98$ (2 digits), $13812345678$ (11 digits)
- Maximum length: $11$
- Output: $13812345678$ (the phone number!)

**测试用例 2：** `StudentID:20241001,Score:98,Phone:13812345678`
- 数字序列：$20241001$（8 位数字），$98$（2 位数字），$13812345678$（11 位数字）
- 最大长度：$11$
- 输出：$13812345678$（电话号码！）

**Test Case 3:** `Hello@World!`
- No digits found
- Output: $-1$

**测试用例 3：** `Hello@World!`
- 未找到数字
- 输出：$-1$

**Test Case 4:** `Room305-Phone:1234567-Grade:95`
- Digit sequences: $305$ (3 digits), $1234567$ (7 digits), $95$ (2 digits)
- Maximum length: $7$
- Output: $1234567$

**测试用例 4：** `Room305-Phone:1234567-Grade:95`
- 数字序列：$305$（3 位数字），$1234567$（7 位数字），$95$（2 位数字）
- 最大长度：$7$
- 输出：$1234567$

**Test Case 5:** `a1b2c3d4e5f6g7h8i9j0$
- Digit sequences: $1,2,3,4,5,6,7,8,9,0$
- Maximum length: $1$
- All have length $1$, largest is: $9$

**测试用例 5：** `a1b2c3d4e5f6g7h8i9j0$
- 数字序列：$1,2,3,4,5,6,7,8,9,0$
- 最大长度：$1$
- 所有长度均为 $1$，最大的是：$9$

## Constraints

<div align=center>

| Test Cases | $T$ | $\lvert S \rvert$ | Number Length |
| :---: | :---: | :---: | :---: |
| Sample | $5$ | Various | $\le 20$ digits |
| $1$–$3$ | $T \le 5$ | $\lvert S \rvert \le 50$ | $\le 10$ digits |
| $4$–$6$ | $T \le 10$ | $\lvert S \rvert \le 100$ | $\le 15$ digits |
| $7$–$9$ | $T \le 20$ | $\lvert S \rvert \le 500$ | $\le 18$ digits |
| $10$–$12$ | $T \le 50$ | $\lvert S \rvert \le 1000$ | $\le 30$ digits |
| $13$–$15$ | $T \le 80$ | $\lvert S \rvert \le 5000$ | $\le 50$ digits |
| $16$–$17$ | $T = 100$ | $\lvert S \rvert \le 10^{4}$ | $\le 60$ digits |
| $18$–$19$ | $T = 100$ | $\lvert S \rvert \le 5\times 10^{4}$ | |
| $20$ | $T = 100$ | $\lvert S \rvert = 10^{5}$ | $\le 100$ digits |

</div>

<div class="break-page"/>

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    cin.ignore(); // Ignore newline after T

    while (T--)
    {
        string S;
        getline(cin, S);

        string current_num = "";
        int max_length = 0;
        string result = "-1";

        // Process each character
        for (int i = 0; S[i] != '\0'; i++)
        {
            char c = S[i];
            if (isdigit(c))
            {
                current_num += c;
            }
            else
            {
                if (!current_num.empty())
                {
                    int len = current_num.length();
                    if (len > max_length)
                    {
                        max_length = len;
                        result = current_num;
                    }
                    else if (len == max_length)
                    {
                        // Compare as strings to handle very long numbers
                        // For same length, lexicographic comparison works
                        if (current_num > result)
                        {
                            result = current_num;
                        }
                    }
                    current_num = "";
                }
            }
        }

        // Don't forget the last number if string ends with digits
        if (!current_num.empty())
        {
            int len = current_num.length();
            if (len > max_length)
            {
                max_length = len;
                result = current_num;
            }
            else if (len == max_length)
            {
                if (current_num > result)
                {
                    result = current_num;
                }
            }
        }

        // Output result (convert to integer if not -1 to remove leading zeros)
        if (result == "-1")
        {
            cout << "-1\n";
        }
        else
        {
            // For very long numbers, output as string
            // For normal numbers, convert to remove leading zeros
            if (result.length() <= 18)
            {
                cout << stoll(result) << "\n";
            }
            else
            {
                // Remove leading zeros for very long numbers
                size_t first_nonzero = result.find_first_not_of('0');
                if (first_nonzero == string::npos)
                {
                    cout << "0\n";
                }
                else
                {
                    cout << result.substr(first_nonzero) << "\n";
                }
            }
        }
    }

    return 0;
}

```

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
| $10$ | Before current position, at least one of $l$, $s$, $t$ appeared, and none of $d$, $q$, $w$, $h` appeared | Baicen feels everything is normal, keeps idling |
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

# E - Robot

> **Problem Summary:** Determine the final position of the robot after executing the commands.

> **问题摘要：** 确定机器人执行命令后的最终位置。

## Background

A robot is placed on a 2D grid at the origin $(0, 0)$. It can move in four directions: up, down, left, and right.

一个机器人被放置在二维网格的原点 $(0, 0)$。它可以向四个方向移动：上、下、左、右。

You are given a sequence of commands, and you need to determine the robot's final position after executing all the commands.

给定一系列命令，你需要确定机器人执行所有命令后的最终位置。

## Problem Description

The robot follows these commands:

机器人遵循以下命令：

- `U`: Move up by $1$ unit.
- `D`: Move down by $1$ unit.
- `L`: Move left by $1$ unit.
- `R`: Move right by $1$ unit.

- `U`：向上移动 $1$ 单位。
- `D`：向下移动 $1$ 单位。
- `L`：向左移动 $1$ 单位。
- `R`：向右移动 $1$ 单位。

Given a string of commands, calculate the robot's final position.

给定一个命令字符串，计算机器人的最终位置。

## Input Format

The first line contains an integer $T$ ($1 \leq T \leq 10^4$), the number of test cases.

第一行包含一个整数 $T$ ($1 \leq T \leq 10^4$)，表示测试用例的数量。

Each of the next $T$ lines contains a string $S$ ($1 \leq |S| \leq 10^5$), the sequence of commands.

接下来的 $T$ 行每行包含一个字符串 $S$ ($1 \leq |S| \leq 10^5$)，表示命令序列。

## Output Format

For each test case, output two integers $x$ and $y$, the final coordinates of the robot.

对于每个测试用例，输出两个整数 $x$ 和 $y$，表示机器人的最终坐标。

## Sample Input

```
3
UUDDLRLR
UUUU
DDDD
```

## Sample Output

```
0 0
0 4
0 -4
```

## Sample Explanation

1. In the first test case, the robot moves up twice, down twice, left once, and right once, returning to the origin $(0, 0)$.
2. In the second test case, the robot moves up four times, ending at $(0, 4)$.
3. In the third test case, the robot moves down four times, ending at $(0, -4)$.

1. 在第一个测试用例中，机器人向上移动两次，向下移动两次，向左移动一次，向右移动一次，回到原点 $(0, 0)$。
2. 在第二个测试用例中，机器人向上移动四次，最终到达 $(0, 4)$。
3. 在第三个测试用例中，机器人向下移动四次，最终到达 $(0, -4)$。

## Constraints

- The sum of $|S|$ over all test cases does not exceed $10^6$.

- 所有测试用例的 $|S|$ 总和不超过 $10^6$。

## Standard Code

```cpp
#include <iostream>
#include <cstdio>
#include <bits/stdc++.h>
using namespace std;
// high precision multipication  模拟竖式运算 但其实洛谷上还有FFT和分治（但我不会 :))
string multiply(string num1, string num2)
{
    if (num1 == "0" || num2 == "0")
        return "0";
    int n = num1.size();
    int m = num2.size();
    vector<int> res(n + m, 0); // 结果数组 n+m为结果最大可能位数
    for (int i = n - 1; i >= 0; i--)
        for (int j = m - 1; j >= 0; j--)
        {
            int digit1 = num1[i] - '0';
            int digit2 = num2[j] - '0';
            int mul = digit1 * digit2;
            int sum = mul + res[i + j + 1];
            res[i + j + 1] = sum % 10;
            res[i + j] = res[i + j] + sum / 10; // 进位
        }
    string result = "";
    bool found_none_zero = false;
    for (int i = 0; i < res.size(); i++)
    {
        int num = res[i];
        if (num != 0)
            found_none_zero = true;
        if (found_none_zero)
            result = result + char(num + '0'); // int转string
    }
    if (result == "")
        return "0";
    return result;
}
string removeEvenDigits(string num)
{
    string result = "";
    for (int i = 0; i < num.size(); i++)
    {
        char c = num[i];
        if (c == '1' || c == '3' || c == '5' || c == '7' || c == '9')
            result += c;
    }
    if (result == "")
        return "0";
    return result;
}
int n;
string a, b;
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    if (!(cin >> n))
        return 0;
    for (int i = 1; i <= n; i++)
    {
        cin >> a >> b;
        string multi_result = multiply(a, b);
        string final_result = removeEvenDigits(multi_result);
        cout << final_result << "\n";
    }
    return 0;
}

```

# F - Challenge

> **Problem Summary:** Calculate the scores for participants based on their successful submissions and problem difficulties.

> **问题摘要：** 根据参赛者的成功提交和题目难度计算分数。

## Problem Description

There are $n$ participants and $m$ successful submissions. Each successful submission is a pair $(\mathrm{id}, d)$ where $\mathrm{id}$ is the participant ID (a string) and $d \in \{E,M,H\}$ denotes the problem difficulty: Easy, Medium, Hard.

共有 $n$ 名参赛者和 $m$ 次成功提交。每次成功提交是一个二元组 $(\mathrm{id}, d)$，其中 $\mathrm{id}$ 是参赛者的编号（字符串），$d \in \{E,M,H\}$ 表示题目的难度：简单（Easy）、中等（Medium）、困难（Hard）。

Let for a participant $p$ the counts of solved problems of each difficulty be
$$e_p,\quad m_p,\quad h_p$$
respectively. The total score $S_p$ for participant $p$ is
$$S_p = 100 e_p + 200 m_p + 300 h_p + 500\cdot\mathbf{1}_{\{e_p\ge1,\;m_p\ge1,\;h_p\ge1\}},$$
where $\mathbf{1}_{\{
\cdot\}}$ is the indicator function (equals $1$ if the condition holds, else $0$).

对于每个参赛者 $p$，其解决的各难度题目数量分别为 $e_p, m_p, h_p$。参赛者 $p$ 的总分 $S_p$ 为：
$$S_p = 100 e_p + 200 m_p + 300 h_p + 500\cdot\mathbf{1}_{\{e_p\ge1,\;m_p\ge1,\;h_p\ge1\}}$$
其中 $\mathbf{1}_{\{\cdot\}}$ 是指示函数（条件成立时为 $1$，否则为 $0$）。

## Input Format

- The first line contains two integers $n$ and $m$ with $1 \le n \le 100$, $1 \le m \le 1000$.
- The next $m$ lines each contain a string $\mathrm{id}$ and a character $d$; $\mathrm{id}$ is the participant's ID (lowercase letters, length $\le 20$) and $d \in \{E,M,H\}$.

第一行包含两个整数 $n$ 和 $m$，其中 $1 \le n \le 100$，$1 \le m \le 1000$。
接下来的 $m$ 行，每行包含一个字符串 $\mathrm{id}$ 和一个字符 $d$；$\mathrm{id}$ 是参赛者编号（小写字母，长度不超过 $20$），$d \in \{E,M,H\}$。

## Output Format

For every participant who made at least one submission, output a line
$$\mathrm{id}\; S_p$$
where participants are listed in lexicographical order of $\mathrm{id}$.

对于每个至少提交过一次的参赛者，输出一行：
$$\mathrm{id}\; S_p$$
参赛者按编号的字典序排列。

## Sample Input

```
3 7
alice E
bob M
alice M
charlie H
alice H
bob E
charlie E
```

## Sample Output

```
alice 1100
bob 300
charlie 400
```

## Sample Explanation

1. For participant "alice": solved Easy, Medium, and Hard, so gets the bonus. $S_{alice} = 100 \times 1 + 200 \times 1 + 300 \times 1 + 500 = 1100$.
2. For "bob": solved Easy and Medium, no bonus. $S_{bob} = 100 \times 1 + 200 \times 1 = 300$.
3. For "charlie": solved Easy and Hard, no bonus. $S_{charlie} = 100 \times 1 + 300 \times 1 = 400$.

1. 对于参赛者 "alice"：解决了简单、中等和困难题目，获得额外奖励。$S_{alice} = 100 \times 1 + 200 \times 1 + 300 \times 1 + 500 = 1100$。
2. 对于 "bob"：解决了简单和中等题目，无奖励。$S_{bob} = 100 \times 1 + 200 \times 1 = 300$。
3. 对于 "charlie"：解决了简单和困难题目，无奖励。$S_{charlie} = 100 \times 1 + 300 \times 1 = 400$。

## Notes

- Participants are sorted by ID in lexicographical order.
- The bonus of $500$ is awarded at most once per participant.
- Each submission corresponds to a distinct problem solved.

- 参赛者按编号字典序排列。
- 额外奖励 $500$ 每位参赛者最多获得一次。
- 每次提交对应一个不同的题目。


## Standard Code

```cpp
#include <iostream>
#include <string>
#include <map>
#include <set>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);

    int n, m;
    cin >> n >> m;

    map<string, int> scores;
    map<string, set<char>> difficulties;

    for (int i = 0; i < m; i++)
    {
        string id;
        char difficulty;
        cin >> id >> difficulty;

        // Add points based on difficulty
        if (difficulty == 'E')
        {
            scores[id] += 100;
        }
        else if (difficulty == 'M')
        {
            scores[id] += 200;
        }
        else if (difficulty == 'H')
        {
            scores[id] += 300;
        }

        // Track which difficulties this participant has solved
        difficulties[id].insert(difficulty);
    }

    // Add bonus for participants who solved all three types
    for (auto &[id, diff_set] : difficulties)
    {
        if (diff_set.count('E') && diff_set.count('M') && diff_set.count('H'))
        {
            scores[id] += 500;
        }
    }

    // Output sorted by ID (map is automatically sorted)
    for (auto &[id, score] : scores)
    {
        cout << id << " " << score << "\n";
    }

    return 0;
}

```

# G - Alternating Subsequence

> **Problem Summary:** Find the maximum sum of an alternating subsequence.

> **问题摘要：** 找到交替子序列的最大和。

## Background

An alternating subsequence is a sequence where the signs of consecutive elements alternate. For example, $[1, -2, 3, -4]$ is an alternating subsequence, but $[1, 2, -3]$ is not.

交替子序列是指连续元素的符号交替变化的序列。例如，$[1, -2, 3, -4]$ 是一个交替子序列，但 $[1, 2, -3]$ 不是。

Given an array of integers, find the maximum sum of an alternating subsequence.

给定一个整数数组，找到交替子序列的最大和。

## Problem Description

You are given an array $a$ of $n$ integers. Find the maximum sum of an alternating subsequence of $a$.

给定一个包含 $n$ 个整数的数组 $a$。找到 $a$ 的一个交替子序列的最大和。

## Input Format

The first line contains an integer $T$ ($1 \leq T \leq 10^4$), the number of test cases.

第一行包含一个整数 $T$ ($1 \leq T \leq 10^4$)，表示测试用例的数量。

Each test case consists of two lines:
- The first line contains an integer $n$ ($1 \leq n \leq 10^5$), the size of the array.
- The second line contains $n$ integers $a_1, a_2, \dots, a_n$ ($-10^9 \leq a_i \leq 10^9$), the elements of the array.

每个测试用例包含两行：
- 第一行包含一个整数 $n$ ($1 \leq n \leq 10^5$)，表示数组的大小。
- 第二行包含 $n$ 个整数 $a_1, a_2, \dots, a_n$ ($-10^9 \leq a_i \leq 10^9$)，表示数组的元素。

## Output Format

For each test case, output a single integer, the maximum sum of an alternating subsequence.

对于每个测试用例，输出一个整数，表示交替子序列的最大和。

## Sample Input

```
2
5
1 -2 3 -4 5
4
-1 -2 -3 -4
```

## Sample Output

```
9
-1
```

## Sample Explanation

1. In the first test case, the optimal subsequence is $[1, -2, 3, -4, 5]$, with a sum of $1 + (-2) + 3 + (-4) + 5 = 9$.
2. In the second test case, the optimal subsequence is $[-1]$, with a sum of $-1$.

1. 在第一个测试用例中，最优子序列是 $[1, -2, 3, -4, 5]$，其和为 $1 + (-2) + 3 + (-4) + 5 = 9$。
2. 在第二个测试用例中，最优子序列是 $[-1]$，其和为 $-1$。

## Constraints

- The sum of $n$ over all test cases does not exceed $10^6$.

- 所有测试用例的 $n$ 总和不超过 $10^6$。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    if (n == 1)
    {
        cout << 1 << "\n";
        return 0;
    }

    // dp[i][0] = max length ending at i with last difference positive
    // dp[i][1] = max length ending at i with last difference negative
    vector<vector<int>> dp(n, vector<int>(2, 1));

    for (int i = 1; i < n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            if (a[i] > a[j])
            {
                // Current difference is positive
                // Can extend from j if last was negative, or start new
                dp[i][0] = max(dp[i][0], dp[j][1] + 1);
            }
            else if (a[i] < a[j])
            {
                // Current difference is negative
                // Can extend from j if last was positive, or start new
                dp[i][1] = max(dp[i][1], dp[j][0] + 1);
            }
        }
    }

    int result = 1;
    for (int i = 0; i < n; i++)
    {
        result = max(result, dp[i][0]);
        result = max(result, dp[i][1]);
    }

    cout << result << "\n";

    return 0;
}

```

# H - Adventure

> **Problem Summary:** Determine the maximum number of adventures that can be completed.

> **问题摘要：** 确定可以完成的最大冒险次数。

## Background

You are an adventurer with a limited amount of stamina. Each adventure requires a certain amount of stamina to complete. Once you complete an adventure, you gain some stamina back.

你是一名冒险者，体力有限。每次冒险都需要一定的体力来完成。一旦完成冒险，你会恢复一些体力。

You want to maximize the number of adventures you can complete.

你希望最大化可以完成的冒险次数。

## Problem Description

You are given $n$ adventures, each with two values:
- $a_i$: The stamina required to start the adventure.
- $b_i$: The stamina gained after completing the adventure.

给定 $n$ 个冒险，每个冒险有两个值：
- $a_i$：开始冒险所需的体力。
- $b_i$：完成冒险后恢复的体力。

You start with $s$ stamina. Determine the maximum number of adventures you can complete.

你以 $s$ 点体力开始。确定可以完成的最大冒险次数。

## Input Format

The first line contains two integers $n$ and $s$ ($1 \leq n \leq 10^5$, $1 \leq s \leq 10^9$), the number of adventures and your initial stamina.

第一行包含两个整数 $n$ 和 $s$ ($1 \leq n \leq 10^5$, $1 \leq s \leq 10^9$)，表示冒险的数量和你的初始体力。

The next $n$ lines each contain two integers $a_i$ and $b_i$ ($1 \leq a_i, b_i \leq 10^9$), the stamina required and gained for each adventure.

接下来的 $n$ 行每行包含两个整数 $a_i$ 和 $b_i$ ($1 \leq a_i, b_i \leq 10^9$)，表示每个冒险所需和恢复的体力。

## Output Format

Output a single integer, the maximum number of adventures you can complete.

输出一个整数，表示可以完成的最大冒险次数。

## Sample Input

```
3 10
5 3
8 6
4 2
```

## Sample Output

```
2
```

## Sample Explanation

1. Start with $10$ stamina.
2. Complete the first adventure ($10 - 5 + 3 = 8$ stamina left).
3. Complete the third adventure ($8 - 4 + 2 = 6$ stamina left).
4. Cannot complete the second adventure (requires $8$ stamina, but only $6$ left).

1. 以 $10$ 点体力开始。
2. 完成第一个冒险（$10 - 5 + 3 = 8$ 点体力剩余）。
3. 完成第三个冒险（$8 - 4 + 2 = 6$ 点体力剩余）。
4. 无法完成第二个冒险（需要 $8$ 点体力，但只有 $6$ 点剩余）。

## Constraints

- You can complete the adventures in any order.
- Each adventure can be completed at most once.

- 你可以以任意顺序完成冒险。
- 每个冒险最多只能完成一次。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int N, M, R, S, Q;
    cin >> N >> M >> R >> S >> Q;
    int ox, oy, mx, my, sx, sy;
    cin >> ox >> oy >> mx >> my >> sx >> sy;

    int K;
    cin >> K;
    vector<vector<bool>> lamp(N + 1, vector<bool>(M + 1, false));
    vector<vector<bool>> lit(N + 1, vector<bool>(M + 1, false));
    for (int i = 0; i < K; i++)
    {
        int x, y;
        cin >> x >> y;
        lamp[x][y] = true;
    }

    int P;
    cin >> P;
    vector<vector<bool>> item(N + 1, vector<bool>(M + 1, false));
    for (int i = 0; i < P; i++)
    {
        int x, y;
        cin >> x >> y;
        item[x][y] = true;
    }

    int T;
    cin >> T;
    string ops;
    cin >> ops;

    auto lightOn = [&](int x, int y)
    {
        int lx = max(1, x - R), rx = min(N, x + R);
        int ly = max(1, y - R), ry = min(M, y + R);
        for (int i = lx; i <= rx; i++)
            for (int j = ly; j <= ry; j++)
                lit[i][j] = true;
    };

    auto search = [&](int x, int y, int &picked, bool &caughtM, bool &caughtS)
    {
        int lx = max(1, x - S), rx = min(N, x + S);
        int ly = max(1, y - S), ry = min(M, y + S);
        for (int i = lx; i <= rx; i++)
        {
            for (int j = ly; j <= ry; j++)
            {
                if (item[i][j] && lit[i][j])
                {
                    item[i][j] = false;
                    picked++;
                }
                if (i == mx && j == my)
                    caughtM = true;
                if (i == sx && j == sy)
                    caughtS = true;
            }
        }
    };

    int cx = ox, cy = oy, hp = Q, picked = 0;
    bool caughtM = false, caughtS = false;

    for (char c : ops)
    {
        if (c == 'U')
            cx--;
        else if (c == 'D')
            cx++;
        else if (c == 'L')
            cy--;
        else if (c == 'R')
            cy++;

        // 先开灯
        if (lamp[cx][cy])
        {
            lamp[cx][cy] = false;
            lightOn(cx, cy);
        }
        // 扣血判定（视为拾取脚下物品）
        if (item[cx][cy])
        {
            hp--;
            item[cx][cy] = false; // 自动拾取该物品
            picked++;
            if (hp <= 0)
            {
                cout << "Dead\n";
                return 0;
            }
        }
        // 搜索拾取被照亮物品，抓人
        search(cx, cy, picked, caughtM, caughtS);
        // 踩到人再搜索一次
        if ((cx == mx && cy == my) || (cx == sx && cy == sy))
        {
            search(cx, cy, picked, caughtM, caughtS);
        }
    }

    cout << picked << " " << hp << " " << (caughtM ? 1 : 0) << " " << (caughtS ? 1 : 0) << "\n";
    return 0;
}

```

# I - Canteen

> **Problem Summary:** Optimize the canteen queue to minimize waiting time.

> **问题摘要：** 优化食堂队列以最小化等待时间。

## Background

In a school canteen, students form a queue to get their meals. Each student has a specific time they take to get their meal. The canteen staff wants to optimize the order of the queue to minimize the total waiting time for all students.

在学校食堂，学生排队领取餐点。每个学生领取餐点所需的时间不同。食堂工作人员希望优化队列顺序，以最小化所有学生的总等待时间。

## Problem Description

You are given $n$ students, each with a time $t_i$ they take to get their meal. Determine the order of the queue that minimizes the total waiting time.

给定 $n$ 名学生，每个学生领取餐点所需的时间为 $t_i$。确定队列的顺序以最小化总等待时间。

## Input Format

The first line contains an integer $n$ ($1 \leq n \leq 10^5$), the number of students.

第一行包含一个整数 $n$ ($1 \leq n \leq 10^5$)，表示学生人数。

The second line contains $n$ integers $t_1, t_2, \dots, t_n$ ($1 \leq t_i \leq 10^9$), the time each student takes.

第二行包含 $n$ 个整数 $t_1, t_2, \dots, t_n$ ($1 \leq t_i \leq 10^9$)，表示每个学生领取餐点所需的时间。

## Output Format

Output a single integer, the minimum total waiting time.

输出一个整数，表示最小的总等待时间。

## Sample Input

```
3
3 1 2
```

## Sample Output

```
10
```

## Sample Explanation

1. Sort the students by their meal times: $[1, 2, 3]$.
2. The waiting times are:
   - First student: $0$
   - Second student: $1$
   - Third student: $1 + 2 = 3$
3. Total waiting time: $0 + 1 + 3 + 3 = 10$.

1. 按学生领取餐点所需时间排序：$[1, 2, 3]$。
2. 等待时间为：
   - 第一个学生：$0$
   - 第二个学生：$1$
   - 第三个学生：$1 + 2 = 3$
3. 总等待时间：$0 + 1 + 3 + 3 = 10$。

## Constraints

- The sum of $n$ over all test cases does not exceed $10^6$.

- 所有测试用例的 $n$ 总和不超过 $10^6$。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int m, q;
    cin >> m >> q;

    int tA, tB, tC;
    cin >> tA >> tB >> tC;

    int pA, pB, pC;
    cin >> pA >> pB >> pC;

    // dp[i][j][last] = minimum time for i meals with j budget, last canteen chosen
    // last: 0=A, 1=B, 2=C
    const int INF = 1e9;
    vector<vector<vector<int>>> dp(m + 1, vector<vector<int>>(q + 1, vector<int>(3, INF)));

    // Base case: first meal at each canteen
    if (pA <= q)
        dp[1][pA][0] = tA;
    if (pB <= q)
        dp[1][pB][1] = tB;
    if (pC <= q)
        dp[1][pC][2] = tC;

    // DP transition
    for (int i = 1; i < m; i++)
    {
        for (int j = 0; j <= q; j++)
        {
            // From canteen A
            if (dp[i][j][0] < INF)
            {
                // Can go to B
                if (j + pB <= q)
                {
                    dp[i + 1][j + pB][1] = min(dp[i + 1][j + pB][1], dp[i][j][0] + tB);
                }
                // Can go to C
                if (j + pC <= q)
                {
                    dp[i + 1][j + pC][2] = min(dp[i + 1][j + pC][2], dp[i][j][0] + tC);
                }
            }

            // From canteen B
            if (dp[i][j][1] < INF)
            {
                // Can go to A
                if (j + pA <= q)
                {
                    dp[i + 1][j + pA][0] = min(dp[i + 1][j + pA][0], dp[i][j][1] + tA);
                }
                // Can go to C
                if (j + pC <= q)
                {
                    dp[i + 1][j + pC][2] = min(dp[i + 1][j + pC][2], dp[i][j][1] + tC);
                }
            }

            // From canteen C
            if (dp[i][j][2] < INF)
            {
                // Can go to A
                if (j + pA <= q)
                {
                    dp[i + 1][j + pA][0] = min(dp[i + 1][j + pA][0], dp[i][j][2] + tA);
                }
                // Can go to B
                if (j + pB <= q)
                {
                    dp[i + 1][j + pB][1] = min(dp[i + 1][j + pB][1], dp[i][j][2] + tB);
                }
            }
        }
    }

    // Find minimum time for m meals with any budget <= q
    int result = INF;
    for (int j = 0; j <= q; j++)
    {
        result = min(result, dp[m][j][0]);
        result = min(result, dp[m][j][1]);
        result = min(result, dp[m][j][2]);
    }

    if (result == INF)
    {
        cout << -1 << "\n";
    }
    else
    {
        cout << result << "\n";
    }

    return 0;
}

```

# J - Loyalty

> **Problem Summary:** Calculate the maximum loyalty points a customer can earn.

> **问题摘要：** 计算顾客可以获得的最大忠诚积分。

## Background

A store offers a loyalty program where customers earn points based on their purchases. Each item has a price and a loyalty point value. Customers have a budget and want to maximize the loyalty points they can earn.

一家商店提供一个忠诚计划，顾客根据购买的商品获得积分。每件商品都有价格和忠诚积分值。顾客有一个预算，希望最大化可以获得的忠诚积分。

## Problem Description

You are given $n$ items, each with a price $p_i$ and loyalty points $l_i$. You have a budget $B$. Determine the maximum loyalty points you can earn without exceeding your budget.

给定 $n$ 件商品，每件商品的价格为 $p_i$，忠诚积分为 $l_i$。你有一个预算 $B$。确定在不超出预算的情况下可以获得的最大忠诚积分。

## Input Format

The first line contains two integers $n$ and $B$ ($1 \leq n \leq 10^5$, $1 \leq B \leq 10^9$), the number of items and your budget.

第一行包含两个整数 $n$ 和 $B$ ($1 \leq n \leq 10^5$, $1 \leq B \leq 10^9$)，表示商品数量和你的预算。

The next $n$ lines each contain two integers $p_i$ and $l_i$ ($1 \leq p_i, l_i \leq 10^9$), the price and loyalty points of each item.

接下来的 $n$ 行每行包含两个整数 $p_i$ 和 $l_i$ ($1 \leq p_i, l_i \leq 10^9$)，表示每件商品的价格和忠诚积分。

## Output Format

Output a single integer, the maximum loyalty points you can earn.

输出一个整数，表示可以获得的最大忠诚积分。

## Sample Input

```
3 50
20 60
30 100
10 20
```

## Sample Output

```
120
```

## Sample Explanation

1. Buy the first and third items:
   - Total price: $20 + 10 = 30$
   - Total loyalty points: $60 + 20 = 120$.
2. Cannot buy the second item as it exceeds the budget.

1. 购买第一件和第三件商品：
   - 总价格：$20 + 10 = 30$
   - 总忠诚积分：$60 + 20 = 120$。
2. 无法购买第二件商品，因为它超出了预算。

## Constraints

- Each item can be purchased at most once.

- 每件商品最多只能购买一次。

## Standard Code

```cpp

// Note that there's a lot of pre-defined functions in this code that're very useful in terms of ICPC.

#include <bits/stdc++.h>
#define N 1000005
#define max(a, b) a > b ? a : b
#define f1(i, n, m) for (int i = n; i <= m; ++i)
#define f2(i, n, m) for (int i = n; i >= m; --i)
#define ll long long
#define reset(a, b) memset(a, b, sizeof(a))
#define INF 0x3f3f3f
using namespace std;
template <typename T>
void read(T &x)
{
	int w = 1;
	x = 0;
	char c = getchar();
	while (c < '0' || c > '9')
	{
		if (c == '-')
			w = -1;
		c = getchar();
	}
	while (c >= '0' && c <= '9')
	{
		x = (x << 1) + (x << 3) + (c ^ 48);
		c = getchar();
	}
	x *= w;
}
template <typename T, typename... more>
void read(T &x, more &...y) { read(x), read(y...); }
int n, m;
ll l, r, mid;
ll v[5][N], pre1[N], pre2[N], pre3[N];
ll s1[N], s2[N], s3[N];
int dp[N];
inline bool check(ll lim)
{
	pre1[0] = pre2[0] = pre3[0] = 0;
	f1(i, 1, n)
	{
		pre1[i] = pre1[i - 1], pre2[i] = pre2[i - 1], pre3[i] = pre3[i - 1];
		while (s1[i] - s1[pre1[i]] > lim)
			pre1[i]++;
		while (s2[i] - s2[pre2[i]] > lim)
			pre2[i]++;
		while (s3[i] - s3[pre3[i]] > lim)
			pre3[i]++;
	} // 预处理出较每一列在限制条件下能向前跳的最远位置
	reset(dp, INF);
	dp[0] = 0;
	int step, p1, p2;
	f1(i, 1, n)
	{
		dp[i] = min(dp[i], dp[pre3[i]] + 1); // 以第一种情况更新状态
		p1 = p2 = i, step = 0;
		while (step <= m && (p1 || p2))
		{ //
			if (p1 > p2)
				p1 = pre1[p1];
			else
				p2 = pre2[p2];
			step++;
			dp[i] = min(dp[i], dp[max(p1, p2)] + step); // 横向块向前跳
		}
		if (dp[i] > m)
			return false;
	}
	return true;
}
signed main()
{
	read(n, m);
	f1(i, 1, 2) f1(j, 1, n) read(v[i][j]), l = max(v[i][j], l);
	f1(i, 1, n)
	{
		s1[i] = s1[i - 1] + v[1][i];
		s2[i] = s2[i - 1] + v[2][i];
		s3[i] = s1[i] + s2[i];
	}
	r = s3[n];
	while (l < r)
	{
		mid = (l + r) >> 1;
		if (check(mid))
			r = mid;
		else
			l = mid + 1;
	}
	printf("%lld\n", r);
	return 0;
}
```

# K - World Cup

> **Problem Summary:** Predict the winner of the World Cup based on team strengths.

> **问题摘要：** 根据球队实力预测世界杯冠军。

## Background

The World Cup is a knockout tournament where teams compete in matches. Each match is decided based on the strengths of the two teams. The stronger team always wins.

世界杯是一项淘汰赛，球队通过比赛一决高下。每场比赛的胜负取决于两队的实力。实力更强的球队总是获胜。

## Problem Description

You are given $n$ teams, each with a strength $s_i$. The tournament is structured as a single-elimination bracket. Predict the winner of the tournament.

给定 $n$ 支球队，每支球队的实力为 $s_i$。比赛以单淘汰赛形式进行。预测比赛的冠军。

## Input Format

The first line contains an integer $n$ ($2 \leq n \leq 2^{20}$), the number of teams. $n$ is always a power of $2$.

第一行包含一个整数 $n$ ($2 \leq n \leq 2^{20}$)，表示球队数量。$n$ 总是 $2$ 的幂。

The second line contains $n$ integers $s_1, s_2, \dots, s_n$ ($1 \leq s_i \leq 10^9$), the strengths of the teams.

第二行包含 $n$ 个整数 $s_1, s_2, \dots, s_n$ ($1 \leq s_i \leq 10^9$)，表示球队的实力。

## Output Format

Output a single integer, the strength of the winning team.

输出一个整数，表示冠军球队的实力。

## Sample Input

```
4
10 20 30 40
```

## Sample Output

```
40
```

## Sample Explanation

1. In the first round:
   - Match 1: $10$ vs $20$, winner is $20$.
   - Match 2: $30$ vs $40$, winner is $40$.
2. In the final round:
   - Match: $20$ vs $40$, winner is $40$.

1. 第一轮：
   - 比赛 1：$10$ 对 $20$，胜者是 $20$。
   - 比赛 2：$30$ 对 $40$，胜者是 $40$。
2. 决赛：
   - 比赛：$20$ 对 $40$，胜者是 $40$。

## Constraints

- The tournament is perfectly balanced, with no byes.

- 比赛完全平衡，没有轮空。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main()
{
    int n;
    ll m;
    cin >> n >> m;

    vector<ll> cost(n);
    for (int i = 0; i < n; i++)
    {
        cin >> cost[i];
    }

    // Split into two halves for meet-in-the-middle
    int n1 = n / 2;
    int n2 = n - n1;

    // Generate all subset sums for first half
    vector<ll> sum1;
    for (int mask = 0; mask < (1 << n1); mask++)
    {
        ll s = 0;
        for (int i = 0; i < n1; i++)
        {
            if (mask & (1 << i))
            {
                s += cost[i];
            }
        }
        sum1.push_back(s);
    }

    // Generate all subset sums for second half
    vector<ll> sum2;
    for (int mask = 0; mask < (1 << n2); mask++)
    {
        ll s = 0;
        for (int i = 0; i < n2; i++)
        {
            if (mask & (1 << i))
            {
                s += cost[n1 + i];
            }
        }
        sum2.push_back(s);
    }

    // Sort second half
    sort(sum2.begin(), sum2.end());

    // For each sum in first half, find how many sums in second half can be added
    ll answer = 0;
    for (ll s1 : sum1)
    {
        if (s1 > m)
            continue;
        ll remaining = m - s1;
        // Count how many elements in sum2 are <= remaining
        ll count = upper_bound(sum2.begin(), sum2.end(), remaining) - sum2.begin();
        answer += count;
    }

    cout << answer << endl;

    return 0;
}

```

# L - Moodle

> **Problem Summary:** Determine the most active user on Moodle.

> **问题摘要：** 确定 Moodle 上最活跃的用户。

## Background

Moodle is an online learning platform where students interact with course materials, submit assignments, and participate in discussions. Each user has an activity score based on their interactions.

Moodle 是一个在线学习平台，学生可以在上面与课程材料互动、提交作业并参与讨论。每个用户根据其互动获得一个活跃分数。

You are given the activity logs of all users and need to determine the most active user.

给定所有用户的活动日志，需要确定最活跃的用户。

## Problem Description

You are given $n$ activity logs, each representing an interaction by a user. Each log contains a user ID and an activity score. Determine the user with the highest total activity score. If there is a tie, choose the user with the smallest ID.

给定 $n$ 条活动日志，每条日志表示用户的一次互动。每条日志包含一个用户 ID 和一个活跃分数。确定活跃分数总和最高的用户。如果有平局，选择 ID 最小的用户。

## Input Format

The first line contains an integer $n$ ($1 \leq n \leq 10^5$), the number of activity logs.

第一行包含一个整数 $n$ ($1 \leq n \leq 10^5$)，表示活动日志的数量。

The next $n$ lines each contain two integers $u_i$ and $a_i$ ($1 \leq u_i \leq 10^9$, $1 \leq a_i \leq 10^9$), the user ID and activity score of each log.

接下来的 $n$ 行每行包含两个整数 $u_i$ 和 $a_i$ ($1 \leq u_i \leq 10^9$, $1 \leq a_i \leq 10^9$)，表示每条日志的用户 ID 和活跃分数。

## Output Format

Output two integers: the user ID of the most active user and their total activity score.

输出两个整数：最活跃用户的 ID 和其活跃分数总和。

## Sample Input

```
5
1 10
2 20
1 15
3 5
2 25
```

## Sample Output

```
2 45
```

## Sample Explanation

1. User $1$ has a total score of $10 + 15 = 25$.
2. User $2$ has a total score of $20 + 25 = 45$.
3. User $3$ has a total score of $5$.
4. The most active user is $2$ with a score of $45$.

1. 用户 $1$ 的总分数为 $10 + 15 = 25$。
2. 用户 $2$ 的总分数为 $20 + 25 = 45$。
3. 用户 $3$ 的总分数为 $5$。
4. 最活跃的用户是 $2$，分数为 $45$。

## Constraints

- The sum of $n$ over all test cases does not exceed $10^6$.

- 所有测试用例的 $n$ 总和不超过 $10^6$。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    // Use BFS to find shortest path from initial state to goal state
    // State is represented as a bitmask of bugs
    int initial = (1 << n) - 1; // All bugs present
    int goal = 0;               // No bugs

    vector<int> patchTime(m);
    vector<int> patchCond1(m), patchCond2(m);
    vector<int> patchEffect1(m), patchEffect2(m);

    for (int i = 0; i < m; i++)
    {
        cin >> patchTime[i];
        string cond, effect;
        cin >> cond >> effect;

        patchCond1[i] = patchCond2[i] = 0;
        patchEffect1[i] = patchEffect2[i] = 0;

        for (int j = 0; j < n; j++)
        {
            if (cond[j] == '+')
                patchCond1[i] |= (1 << j);
            if (cond[j] == '-')
                patchCond2[i] |= (1 << j);
            if (effect[j] == '-')
                patchEffect1[i] |= (1 << j);
            if (effect[j] == '+')
                patchEffect2[i] |= (1 << j);
        }
    }

    // Dijkstra's algorithm
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    map<int, int> dist;

    pq.push({0, initial});
    dist[initial] = 0;

    while (!pq.empty())
    {
        auto [d, state] = pq.top();
        pq.pop();

        if (state == goal)
        {
            cout << d << "\n";
            return 0;
        }

        if (dist.count(state) && dist[state] < d)
            continue;

        // Try each patch
        for (int i = 0; i < m; i++)
        {
            // Check if patch can be applied
            bool canApply = true;

            // Check condition1: required bugs must exist
            if ((state & patchCond1[i]) != patchCond1[i])
                canApply = false;

            // Check condition2: forbidden bugs must not exist
            if ((state & patchCond2[i]) != 0)
                canApply = false;

            if (!canApply)
                continue;

            // Apply patch
            int newState = state;
            newState &= ~patchEffect1[i]; // Remove bugs
            newState |= patchEffect2[i];  // Add bugs

            int newDist = d + patchTime[i];

            if (!dist.count(newState) || dist[newState] > newDist)
            {
                dist[newState] = newDist;
                pq.push({newDist, newState});
            }
        }
    }

    cout << 0 << "\n";

    return 0;
}

```

# M - Polygon

> **Problem Summary:** Determine if a polygon is convex.

> **问题摘要：** 判断一个多边形是否是凸的。

## Background

A polygon is convex if all its interior angles are less than $180^\circ$. Given the vertices of a polygon in order, determine if it is convex.

如果一个多边形的所有内角都小于 $180^\circ$，则该多边形是凸的。给定一个多边形的顶点顺序，判断它是否是凸的。

## Problem Description

You are given the vertices of a polygon in order. Determine if the polygon is convex.

给定一个多边形的顶点顺序，判断该多边形是否是凸的。

## Input Format

The first line contains an integer $n$ ($3 \leq n \leq 10^5$), the number of vertices.

第一行包含一个整数 $n$ ($3 \leq n \leq 10^5$)，表示顶点的数量。

The next $n$ lines each contain two integers $x_i$ and $y_i$ ($-10^9 \leq x_i, y_i \leq 10^9$), the coordinates of the $i$-th vertex.

接下来的 $n$ 行每行包含两个整数 $x_i$ 和 $y_i$ ($-10^9 \leq x_i, y_i \leq 10^9$)，表示第 $i$ 个顶点的坐标。

## Output Format

Output `YES` if the polygon is convex, otherwise output `NO`.

如果多边形是凸的，输出 `YES`，否则输出 `NO`。

## Sample Input

```
4
0 0
0 1
1 1
1 0
```

## Sample Output

```
YES
```

## Sample Explanation

1. The polygon is a square, which is convex.

1. 该多边形是一个正方形，它是凸的。

## Constraints

- The vertices are given in order, either clockwise or counterclockwise.

- 顶点按顺序给出，可以是顺时针或逆时针。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;
using ll = long long;

struct Point
{
    ll x, y;
};

// cross product (b - a) x (c - a)
static inline ll cross(const Point &a, const Point &b, const Point &c)
{
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    if (!(cin >> n))
        return 0;
    vector<Point> p(n);
    for (int i = 0; i < n; ++i)
        cin >> p[i].x >> p[i].y;

    // Find sign of first non-zero cross product
    int sign = 0; // 0 = unknown, +1 = positive, -1 = negative
    for (int i = 0; i < n; ++i)
    {
        ll z = cross(p[i], p[(i + 1) % n], p[(i + 2) % n]);
        if (z == 0)
            continue; // collinear, ignore
        int s = (z > 0) ? 1 : -1;
        if (sign == 0)
            sign = s;
        else if (sign != s)
        {
            cout << "false\n";
            return 0;
        }
    }

    // If all cross products are zero (degenerate but allowed as simple polygon? here points are unique and polygon simple),
    // treat as convex (all points collinear -> polygon is not strictly a polygon but we'll say convex for this check).
    cout << "true\n";
    return 0;
}

```
