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
