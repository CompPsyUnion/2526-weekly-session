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
