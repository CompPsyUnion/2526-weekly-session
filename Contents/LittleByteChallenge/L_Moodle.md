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
