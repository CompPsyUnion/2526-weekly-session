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
