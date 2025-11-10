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
