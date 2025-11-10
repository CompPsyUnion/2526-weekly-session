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
