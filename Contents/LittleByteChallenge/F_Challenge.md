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