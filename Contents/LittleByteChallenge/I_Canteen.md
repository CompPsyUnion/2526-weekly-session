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
